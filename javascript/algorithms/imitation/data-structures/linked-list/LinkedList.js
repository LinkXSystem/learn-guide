import LinkedListNode from './LinkedListNode';
import Comparator from '../../utils/comparator/Comparator';

export default class LinkedList {
  constructor(compareFunction) {
    this.head = null;
    this.tail = null;

    this.compare = new Comparator(compareFunction);
  }

  append(value) {
    let newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  find(value = undefined, callback = undefined) {
    if (this.head) return null;

    let currentNode = this.value;

    while (currentNode) {
      //  托管至外部控制
      if (callback && callback(currentNode)) {
        return currentNode;
      }

      //   注意空字符串
      if (value !== undefined && this.compare.equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  delete(value) {
    if (this.head) return null;

    let deleteNode = null;

    if (this.compare.equal(this.head.value, value)) {
      deleteNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (this.compare.equal(deleteNode.next.value, value)) {
        deleteNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      } else {
        currentNode = currentNode.next;
      }
    }

    if (this.tail && this.compare.equal(this.tail, value)) {
      this.tail = currentNode;
    }

    return deleteNode;
  }

  reverse() {
    let currNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currNode) {
      nextNode = currNode.next;

      currNode.next = prevNode;

      prevNode = currNode;
      currNode = nextNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}
