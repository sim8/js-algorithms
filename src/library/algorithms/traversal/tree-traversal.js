class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * This class demonstrates the 3 core methods of traversing
 * a binary tree.
 */
export class TreeTraversal {
  constructor() {
    this.root = null;
  }

  /**
   * Initialises tree with following structure and values
   *       0
   *     /   \
   *    1     2
   *   /\     /
   *  3  4   5
   *    /\
   *   6  7
   */
  loadSampleTree() {
    let n0 = new Node(0);
    let n1 = new Node(1);
    let n2 = new Node(2);
    let n3 = new Node(3);
    let n4 = new Node(4);
    let n5 = new Node(5);
    let n6 = new Node(6);
    let n7 = new Node(7);
    n0.left  = n1;
    n0.right = n2;
    n1.left  = n3;
    n1.right = n4;
    n2.left  = n5;
    n4.left  = n6;
    n4.right = n7;
    this.root = n0;
  }

  preOrder(visit, node = this.root) {
    visit(node.value);
    node.left && this.preOrder(visit, node.left);
    node.right && this.preOrder(visit, node.right);
  }

  inOrder(visit, node = this.root) {
    node.left && this.inOrder(visit, node.left);
    visit(node.value);
    node.right && this.inOrder(visit, node.right);
  }

  postOrder(visit, node = this.root) {
    node.left && this.postOrder(visit, node.left);
    node.right && this.postOrder(visit, node.right);
    visit(node.value);
  }
}
