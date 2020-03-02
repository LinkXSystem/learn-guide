const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function IPromise(func) {
  const that = this;

  that.state = PENDING;
  that.value = null;
  that.resolvedCallbacks = [];
  that.rejectedCallbacks = [];

  function resolve(value) {
    if (value instanceof IPromise) {
      return value.then(resolve, reject);
    }

    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = RESOLVED;
        that.value = value;
        that.resolvedCallbacks.map(callback => callback(that.value));
      }
    }, 0);
  }

  function reject(value) {
    setTimeout(() => {
      if (that.state === PENDING) {
        that.state = REJECTED;
        that.value = value;
        that.rejectedCallbacks.map(callback => callback(that.value));
      }
    }, 0);
  }

  try {
    func(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

IPromise.prototype.then = function(onFulfilled, onRejected) {
  function resolutionProcedure(tPromise, x, resolve, reject) {
    if (tPromise === x) {
      return reject(new TypeError("Error"));
    }

    if (x instanceof IPromise) {
      x.then(function(value) {
        resolutionProcedure(tPromise, value, resolve, reject);
      }, reject);
    }

    let called = false;

    if (x !== null && (typeof x === "object" || typeof x === "function")) {
      try {
        let then = x.then;

        if (typeof then === "function") {
          then.call(
            x,
            y => {
              if (called) return;
              called = true;
              resolutionProcedure(tPromise, y, resolve, reject);
            },
            e => {
              if (called) return;
              called = true;
              reject(e);
            }
          );
        } else {
          resolve(x);
        }
      } catch (e) {
        if (called) return;
        called = true;
        reject(e);
      }
    } else {
      resolve(x);
    }
  }

  const that = this;
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : x => x;
  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : r => {
          throw r;
        };

  if (that.state === PENDING) {
    that.resolvedCallbacks.push(onFulfilled);
    that.rejectedCallbacks.push(onRejected);

    return (tPromsie = new IPromise((resolve, reject) => {
      that.resolvedCallbacks.push(() => {
        try {
          const x = onFulfilled(that.value);
          resolutionProcedure(tPromise, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });

      that.rejectedCallbacks.push(() => {
        try {
          const x = onRejected(that.value);
          resolutionProcedure(tPromise, x, resolve, reject);
        } catch (r) {
          reject(r);
        }
      });
    }));
  }

  if (that.state === RESOLVED) {
    return (tPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          const x = onFulfilled(that.value);
          resolutionProcedure(tPromise, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      });
    }));
  }

  if (that.state === REJECTED) {
    onRejected(that.value);
  }
};

// 测试部分
new IPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 0);
}).then(value => {
  console.log(value);
});
