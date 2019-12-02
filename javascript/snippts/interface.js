/**
 *
 * @description 定义实现业务类继承实现的基本方法
 * @author zhi
 *
 */
class StandardInterface {
  constructor() {}

  toString() {
    return this.toJSON();
  }

  // 便于对象的序列化操作
  toJSON() {
    return JSON.stringify(this);
  }

  // 实现迭代器，便于对象属性的遍历，需要注意它和 Object.values / Object.keys / Object.entries 的区别
  [Symbol.iterator]() {}

  // 与迭代器对应，不一定需要实现
  next() {}
}
