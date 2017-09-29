import { LargestContiguousSubarray } from './../../../src/library/algorithms/searching/largest-contiguous-subarray';

const assert = require('assert');

describe('LargestContiguousSubarray', () => {
  let array = [-2, -1, 2, -10, 1, 3, -1, 6, -1];
  beforeEach(() => {
    lcs = new LargestContiguousSubarray();
  });
  // describe('#breadthFirstSearch()', () => {
  //   it('should search the graph in the correct order', () => {
  //     let order = [];
  //     bfs.breadthFirstSearch(item => {
  //       order.push(item);
  //       return false;
  //     }, 0);
  //     assert.equal(order.toString(), [1, 2, 4, 5, 3].toString());
  //   });
  // });
});
