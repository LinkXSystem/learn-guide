export default class Comparator {
  constructor(compareFunction) {
    this.compare = compareFunction || Comparator.defaultCompareFunction;
  }

  static defaultCompareFunction(x, y) {
    if (x === y) {
      return 0;
    }

    return x < y ? -1 : 1;
  }

  equal(x, y) {
    return this.compare(x, y) === 0;
  }
}
