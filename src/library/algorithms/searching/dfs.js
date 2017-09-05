import { Graph } from './../../data-structures/graph';

export class DFS extends Graph {
  depthFirstSearch(node, callback, visited = []) {
    if (callback(this._graph[node].value)) {
      return this._graph[node].value;
    }
    visited.push(node);
    for (let connection of this._graph[node].connections) {
      if (!visited.includes(connection)) {
        let val = this.depthFirstSearch(connection, callback, visited);
        if (val) {
          return val;
        }
      }
    }
    return null;
  }
}
