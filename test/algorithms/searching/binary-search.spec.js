import { BinarySearch } from './../../../src/library/algorithms/searching/binary-search';

const assert = require('assert');

describe('Binary Search', () => {
  let sortedArray = [1, 3, 4, 5, 12, 13, 15, 21, 26, 28, 30, 31, 42];
  let binarySearch;
  beforeEach(() => {
    binarySearch = new BinarySearch();
  });
  describe('#find()', () => {
    it('should find a value in the array', () => {
      let found = binarySearch.find(sortedArray, 5);
      assert.equal(found, true);
    });
    it('should not find a value not in the array', () => {
      let found = binarySearch.find(sortedArray, 29);
      assert.equal(found, false);
    });
  });
});
