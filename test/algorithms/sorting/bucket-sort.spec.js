import { BucketSort } from './../../../src/library/algorithms/sorting/bucket-sort';

const assert = require('assert');

describe('Bucket Sort', () => {
  let array;
  let sortedArray;
  let bucketSort = new BucketSort();
  beforeEach(() => {
    array = [2.1, 2.7, 1.2, 3.9, 12, 4, 4.1, 1, 0.1, 0.2, 0];
    sortedArray = [0, 0.1, 0.2, 1, 1.2, 2.1, 2.7, 3.9, 4, 4.1, 12];
  });
  describe('sort()', () => {
    it('should correctly sort array', () => {
      assert.deepEqual(bucketSort.sort(array), sortedArray);
    });
  });
});
