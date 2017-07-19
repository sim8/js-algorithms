import { BinarySearchTree } from './../../src/library/data-structures/binary-search-tree';

const assert = require('assert');

describe('Binary Search Tree', () => {
  let bst;
  let intArray;
  beforeEach(() => {
    bst = new BinarySearchTree();
    intArray = [3, 6, 66, 4, 12, 267, 43, 2, 7, 78, 85, 34, 45];
  });
  describe('#getSize()', () => {
    it('should return correct size when filled with array of integers', () => {
      bst.insertArray(intArray);
      assert.equal(bst.getSize(), intArray.length);
    });
  });
});
