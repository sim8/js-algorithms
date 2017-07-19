/**
 * Node of Binary Search tree
 */
class Node {
  constructor(value) {
    this.value = value;
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
    if (this._root) {
      return this.find(value, true);
    }
    this._root = new Node(value);
    return null;
  }

  insertArray(array) {
    for (const item of array) {
      this.insert(item);
    }
  }

  getSize() {
    return this._root.getTreeSize();
  }

  find(value, createIfNotInTree) {
    let node = this._root;
    while (node.value !== value) {
      const key = value < node.value ? '_left' : '_right';
      if (node[key]) {
        node = node[key];
      } else {
        if (createIfNotInTree) {
          node[key] = new Node(value);
        }
        return null;
      }
    }
    return node;
  }
}
