class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * Add item to stack
   * @return {void}
   * @param {any} value value to be added
   */
  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    return this;
  }

  /**
   * Remove top item from stack
   * @return {any} top item from
   */
  pop() {
    if (!this.top) {
      throw new Error('Attempting to remove value from empty stack');
    }
    const node = this.top;
    this.top = node.next;
    return node.value;
  }

  peek() {
    if (!this.top) {
      throw new Error('Attempting to peek empty stack');
    }
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}
