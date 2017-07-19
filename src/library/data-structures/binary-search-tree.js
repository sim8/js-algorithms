/**
 * Node of Binary Search tree
 */
class Node {
  constructor(value) {
    this.value = value;
  }

  insert(node) {
    if (node.value === this.value) {
      return;
    }
    const key = node.value < this.value ? '_left' : '_right';
    if (this[key]) {
      this[key].insert(node);
    } else {
      this[key] = node;
    }
  }

  /**
   * Gets the total number of nodes in tree from current node down.
   * @return {[integer]} Total tree size
   */
  getTreeSize() {
    let size = 1;
    size += this._left && this._left.getTreeSize() || 0;
    size += this._right && this._right.getTreeSize() || 0;
    return size;
  }
}

/**
 * Simple Binary Search Tree implementation
 */
export class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this._root) {
      this._root.insert(node);
    } else {
      this._root = node;
    }
  }

  insertArray(array) {
    for (const item of array) {
      this.insert(item);
    }
  }

  getSize() {
    return this._root.getTreeSize();
  }
}
