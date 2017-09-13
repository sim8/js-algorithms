import { InsertionSort } from './../../../src/library/algorithms/sorting/insertion-sort';

const assert = require('assert');

describe('Insertion Sort', () => {
  let array;
  let sortedArray;
  let insertionSort = new InsertionSort();
  beforeEach(() => {
    array = [3, 6, 66, 4, 12, 267, 43, 2, 7, 78, 85, 34, 12, 45];
    sortedArray = [2, 3, 4, 6, 7, 12, 12, 34, 43, 45, 66, 78, 85, 267];
  });
  describe('sort()', () => {
    it('should correctly sort array', () => {
      // assert.equal(MergeSort.mergeSort([1, 3, 2, 5]), sortedArray);
      assert.deepEqual(insertionSort.sort(array), sortedArray);
    });
  });
});
