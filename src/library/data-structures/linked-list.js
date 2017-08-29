export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor(isDoublyLinked) {
    this.isDoublyLinked = isDoublyLinked;
    this.first = null;
    this.last = null;
  }

  /**
   * Add to start of list
   * @return {void}
   * @param {any} value value to be added
   */
  unshift(value) {
    const node = new Node(value);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
  }

  /**
   * Remove item from start of list
   * @return {any} first item in list
   */
  shift() {
    if (this.first === this.last) {
      const node = this.first;
      this.first = null;
      this.last = null;
      return node;
    }
    const node = this.first;
    this.first = this.first.next;
    return node.value;
  }

  // push(value) {
  //
  // }
  // pop() {
  //
  // }

  getLength() {
    let length = 0;
    let node = this.first;
    while (node !== null) {
      length += 1;
      node = node.next;
    }
    return length;
  }
}
