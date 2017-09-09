import { BFS } from './../../../src/library/algorithms/searching/bfs';

const assert = require('assert');

describe('BFS', () => {
  let smallArray = [1, 2, 3, 4, 5];
  let adjacency = [[0, 1, 0, 1, 0],
                   [0, 0, 0, 0, 1],
                   [0, 0, 0, 0, 0],
                   [0, 0, 1, 0, 1],
                   [1, 0, 0, 0, 0]];
  let bfs;
  beforeEach(() => {
    bfs = new BFS(smallArray, adjacency);
  });
  describe('#breadthFirstSearch()', () => {
    it('should search the graph in the correct order', () => {
      let order = [];
      bfs.breadthFirstSearch(item => {
        order.push(item);
        return false;
      }, 0);
      assert.equal(order.toString(), [1, 2, 4, 5, 3].toString());
    });
  });
});
