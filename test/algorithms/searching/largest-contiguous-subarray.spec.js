import { LargestContiguousSubarray } from './../../../src/library/algorithms/searching/largest-contiguous-subarray';

const assert = require('assert');

describe('LargestContiguousSubarray', () => {
  let arr = [-2, -1, 2, -10, 1, 3, -1, 6, -1];
  let lcs;
  beforeEach(() => {
    lcs = new LargestContiguousSubarray();
  });
  describe('#getSum()', () => {
    it('should get the sum of the maximum subarray', () => {
      let sum = lcs.getSum(arr);
      assert.equal(sum, 9);
    });
  });
  describe('#getIndeces()', () => {
    it('should get the indeces of the maximum subarray', () => {
      let indeces = lcs.getIndeces(arr);
      assert.deepEqual(indeces, [4, 7]);
    });
  });
  describe('#getSubarray()', () => {
    it('should get the maximum subarray', () => {
      let subarray = lcs.getSubarray(arr);
      assert.deepEqual(subarray, [1, 3, -1, 6]);
    });
  });
});
