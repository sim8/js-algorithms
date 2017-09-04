import { Graph } from './../../src/library/data-structures/graph';

const assert = require('assert');

describe('Graph', () => {
  let smallArray = [1, 5, 4, 2];
  let adjacency = [[0, 1, 1, 1],
                   [1, 0, 1, 0],
                   [0, 1, 0, 0],
                   [0, 0, 1, 0]];
  let graph;
  beforeEach(() => {
    graph = new Graph();
  });
  // describe('#add()', () => {
  //   it('should add items in the correct location', () => {
  //     simpleArray.map(item => minHeap.add(item));
  //     console.log(minHeap._heap.toString());
  //   });
  // });
});
