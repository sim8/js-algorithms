import { MergeSort } from './../../../src/library/algorithms/sorting/merge-sort';

const assert = require('assert');

describe('Merge Sort', () => {
  let array;
  let sortedArray;
  beforeEach(() => {
    array = [3, 6, 66, 4, 12, 267, 43, 2, 7, 78, 85, 34, 12, 45];
    sortedArray = [2, 3, 4, 6, 7, 12, 12, 34, 43, 45, 66, 78, 85, 267];
  });
  describe('mergeSort()', () => {
    it('should correctly sort array', () => {
      // assert.equal(MergeSort.mergeSort([1, 3, 2, 5]), sortedArray);
      assert.deepEqual(MergeSort.mergeSort(array), sortedArray);
    });
  });
});
