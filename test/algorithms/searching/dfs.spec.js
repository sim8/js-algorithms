import { DFS } from './../../../src/library/algorithms/searching/dfs';

const assert = require('assert');

describe('DFS', () => {
  let smallArray = [1, 2, 3, 4, 5];
  let adjacency = [[0, 1, 0, 1, 0],
                   [0, 0, 0, 0, 1],
                   [0, 0, 0, 0, 0],
                   [0, 0, 1, 0, 1],
                   [1, 0, 0, 0, 0]];
  let dfs;
  beforeEach(() => {
    dfs = new DFS(smallArray, adjacency, false);
  });
  describe('#depthFirstSearch()', () => {
    it('should search the graph in the correct order', () => {
      let order = [];
      dfs.depthFirstSearch(0, item => {
        order.push(item);
        return false;
      });
      assert.equal(order.toString(), [1, 2, 5, 4, 3].toString());
    });
  });
});
