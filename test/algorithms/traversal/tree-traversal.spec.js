import { TreeTraversal } from './../../../src/library/algorithms/traversal/tree-traversal';

const assert = require('assert');

describe('Tree Traversal', () => {
  let array;
  let tree = new TreeTraversal();
  beforeEach(() => {
    array = [];
    tree.loadSampleTree();
  });
  describe('preOrder()', () => {
    it('should traverse the tree in the order parent > left > right', () => {
      tree.preOrder(value => array.push(value))
      assert.deepEqual(array, [0, 1, 3, 4, 6, 7, 2, 5]);
    });
  });
  describe('inOrder()', () => {
    it('should traverse the tree in the order left > parent > right', () => {
      tree.inOrder(value => array.push(value))
      assert.deepEqual(array, [3, 1, 6, 4, 7, 0, 5, 2]);
    });
  });
  describe('postOrder()', () => {
    it('should traverse the tree in the order left > right > parent', () => {
      tree.postOrder(value => array.push(value))
      assert.deepEqual(array, [3, 6, 7, 4, 1, 5, 2, 0]);
    });
  });
});
