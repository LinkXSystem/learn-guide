abstract class SortStrategy {
  abstract sort(target: Array): Array;
}

class BubbleSortStrategy extends SortStrategy {
  sort(target: Array): Array {
    console.log('Sorting using bubble sort');
    return target;
  }
}

class QuickSortStrategy extends SortStrategy {
  sort(target: Array): Array {
    console.log('Sorting using quick sort');
    return target;
  }
}

class Sorter {
  sorter: SortStrategy;

  constructor(sorter: SortStrategy) {
    this.sorter = sorter;
  }

  sort(target: Array): Array {
    return this.sorter.sort();
  }
}

(function() {
  const bubble = new BubbleSortStrategy();
  const quick = new QuickSortStrategy();

  const target = [1, 2, 3, 4, 5];

  const sorter = new Sorter(bubble);
  sorter.sort(target);
})();
