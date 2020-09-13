export default class Reactor {
  constructor(expression) {
    this._state = undefined;
    this.expression = undefined;
    this.descendants = [];
    this.ancestors = [];
    this.define(expression);
  }

  /**
   * Trackers are a way of tracking ancestor reactors when invoking a reactors
   * expression function.
   * 
   * Trackers 是追踪调用 reactors 函数的一种方式。
   *
   * The trackers array is a stack of trackers. Each tracker is an array of
   * reactors. When track() is invoked a reactor is pushed into the tracker at
   * the top of the trackers stack.
   * 
   * trackers 数组是一个 trackers 的栈。每一个 tracker 都是一个 reactor 的数组。
   * 当 track() 被执行的时候，会将一个 reactor 推入到 trackers 栈的栈首。
   * 
   *
   * pushTracker and popTracker are called before and after a reactor's
   * invocation respectively
   * 
   * pushTracker 和 popTracker 被调用于 一个 reactor 的调用前后。
   * 
   *
   * track() is invoked whenever a reactor's state is retreived.
   * 
   * 当一个 reactor 的状态被 retreived（回收）的时候，track() 会被执行
   * 
   */
  static trackers = [];
  static pushTracker() {
    this.trackers.push([]);
  }
  static popTracker() {
    return this.trackers.pop();
  }
  static track(reactor) {
    if (Reactor.trackers.length) {
      this.trackers[this.trackers.length - 1].push(reactor);
    }
  }

  /**
   * Getter/Setter methods that wrap retrieve and define respectively（分别）.
   */

  get state() {
    return this.retrieve();
  }
  set state(expression) {
    this.define(expression);
    return this;
  }

  /**
   * Set the reactor's expression and updates the reactor initiating change
   * propagation.
   * 
   * 设置 reactor 的执行方式和 更新 reactor 的初始化
   *
   * @param  {any} expression – a value or function to keep internally for updates 
   * @param  {any} expression – 内置保留为用于更新的值或函数
   * @return {undefined}
   */
  define(expression) {
    this.expression = expression;
    this.update();
  }

  /**
   * Retreives the reactor's state while
   * updating the trackers reactor set.
   * 
   * 在更新跟踪器的反应堆集时检索反应堆的状态。
   *
   * @return {any} – The current state of the reactor.
   */
  retrieve() {
    Reactor.track(this);

    return this._state;
  }

  /**
   * Updates the reactor's state by invoking it's internal （内部） expression
   * while dynamically reorganizing （改组） the reactor in the graph.
   *
   * @return undefined
   */
  update() {
    // Detach reactor from it's ancestors in the graph
    // by removing itself as a descendant for each of it's ancestors.
    this.ancestors.forEach((ancestor) => ancestor.removeDescendant(this));

    // Add a new tracker to the trackers stack for this reactor
    Reactor.pushTracker();

    // Execute expression and update the internal state
    this._state =
      typeof this.expression === "function"
        ? this.expression()
        : this.expression;

    // Set its ancestors to the latest tracker in the stack
    this.ancestors = Reactor.popTracker();

    // Invoke the each reactor's descendant update method.
    // This allows the change to propagate （传播） through the graph.
    if (this.descendants) {
      this.descendants.forEach((descendant) => descendant.update());
    }

    // Attach reactor to the graph using the ancestors returned.
    // Effectively, re-attaching the updated symbol to the graph
    if (this.ancestors) {
      this.ancestors.forEach((ancestor) => ancestor.addDescendant(this));
    }
  }

  /**
   * Methods to add/remove descendants （后代） to the reactor instance.
   * These methods guarantee （保证） no duplicates.
   */

  addDescendant(reactor) {
    if (!this.descendants.includes(reactor)) {
      this.descendants.push(reactor);
    }
  }
  removeDescendant(reactor) {
    this.descendants = this.descendants.filter(
      (descendant) => descendant !== reactor
    );
  }
}
