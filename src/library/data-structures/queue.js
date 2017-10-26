class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  /**
   * Remove first item from queue
   * @return {any} first item in queue
   */
  remove() {
    if (!this.first) {
      throw new Error('Attempting to remove value from empty queue');
    }
    if (this.first === this.last) {
      const node = this.first;
      this.first = null;
      this.last = null;
      return node.value;
    }
    const node = this.first;
    this.first = this.first.next;
    return node.value;
  }

  /**
   * Add to end of queue
   * @return {void}
   * @param {any} value value to be added
   */
  add(value) {
    const node = new Node(value);
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return this;
  }

  peek() {
    if (!this.first) {
      throw new Error('Attempting to peek empty queue');
    }
    return this.first.value;
  }

  isEmpty() {
    return !this.first;
  }

}
