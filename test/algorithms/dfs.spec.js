import { DFS } from './../../src/library/algorithms/searching/dfs';

const assert = require('assert');

describe('DFS', () => {
  let smallArray = [1, 5, 4, 2];
  let adjacency = [[0, 1, 1, 1],
                   [1, 0, 1, 0],
                   [0, 1, 0, 0],
                   [0, 0, 1, 0]];
  let dfs;
  beforeEach(() => {
    dfs = new DFS(smallArray, adjacency);
  });
  describe('#depthFirstSearch()', () => {
    it('should search the graph in the correct order', () => {
      let order = [];
      dfs.depthFirstSearch(0, item => order.push(item));
    });
  });
});
