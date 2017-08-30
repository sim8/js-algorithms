import { Heap } from './../../src/library/data-structures/heap';
import { objectArray } from './../test-data/object-array';

const assert = require('assert');

describe('Heap', () => {
  let simpleArray = [1, 6, 2, 4, 3, 5, 14, 13, 10, 11, 12, 8, 7, 6, 9];
  let minHeap;
  beforeEach(() => {
    minHeap = new Heap((a, b) => {return a < b});
    // minHeap = new Heap((a, b) => {a.lastName - b.lastName});
  });
  describe('#add()', () => {
    it('should add items in the correct location', () => {
      for (let i = 0; i < 13; i++) {
        minHeap.add(simpleArray[i]);
      }
      console.log(minHeap._heap.toString());
    });
  });
});
