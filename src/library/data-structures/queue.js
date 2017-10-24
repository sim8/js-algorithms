class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class LinkedList {
  constructor() {
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
      this.first.prev = node;
      this.first = node;
    }
    return this;
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
      return node.value;
    }
    const node = this.first;
    this.first = this.first.next;
    this.first.prev = null;
    return node.value;
  }

  /**
   * Add to end of list
   * @return {void}
   * @param {any} value value to be added
   */
  push(value) {
    const node = new Node(value);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      node.prev = this.last;
      this.last.next = node;
      this.last = node;
    }
    return this;
  }

  /**
   * Remove item from end of list
   * @return {any} last item in list
   */
  pop() {
    if (this.first === this.last) {
      const node = this.last;
      this.first = null;
      this.last = null;
      return node.value;
    }
    const node = this.last;
    this.last = this.last.prev;
    this.last.next = null;
    return node.value;
  }

  /**
   * Returns the length of the list
   * @return {number} length of list
   */
  getLength() {
    let length = 0;
    let node = this.first;
    while (node !== null) {
      length += 1;
      node = node.next;
    }
    return length;
  }

  /**
   * Checks if the linked list has a cycle
   * @return {boolean} has cycle
   */
  hasCycle() {
    let fast = this.first;
    let slow = this.first;
    while (true) {
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      if (fast === null) {
        return false;
      }
      fast = fast.next;
      slow = slow.next;
      if (fast === slow) {
        return true;
      }
    }
  };

  /**
   * Iteratively reverses linked list
   */
  reverse() {
    let node = this.first;
    let next;
    this.last = node;
    while (node.next) {
      next = node.next;
      node.next = node.prev;
      node.prev = next;
      node = next;
    }
    node.next = node.prev;
    node.prev = null;
    this.first = node;
    return this;
  }

  /**
   * Applies a callback function to each item in the list, starting with the first
   * @return {void}
   * @param {any} callback callback function to be applied
   */
  map(callback) {
    let node = this.first;
    while (node !== null) {
      callback(node.value);
      node = node.next;
    }
    return this;
  }

  /**
   * Clears the list
   * @return {void}
   */
  clear() {
    this.first = null;
    this.last = null;
    return this;
  }
}
