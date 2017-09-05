import { Heap } from './../../src/library/data-structures/heap';
import { objectArray } from './../test-data/object-array';

const assert = require('assert');

describe('Heap', () => {
  let simpleArray = [1, 6, 2, 4, 3, 5, 14, 13, 10, 11, 12, 8, 7, 6, 9];
  simpleArray = [1, 5, 4, 2, 3, 6, 8];
  simpleArray = [5, 1, 4, 6];
  let minHeap;
  beforeEach(() => {
    minHeap = new Heap((a, b) => {return a > b});
    // minHeap = new Heap((a, b) => {a.lastName - b.lastName});
  });
  describe('#add()', () => {
    it('should add items in the correct location', () => {
      simpleArray.map(item => minHeap.add(item));
      // console.log(minHeap._heap.toString());
    });
  });
  describe('#heapify()', () => {
    it('should correctly heapify a random array', () => {
      minHeap._heap = simpleArray;
      minHeap.heapify();
      // console.log(minHeap._heap.toString());
    });
  });
});
