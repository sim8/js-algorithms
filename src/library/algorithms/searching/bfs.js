import { Graph } from './../../data-structures/graph';

/**
 * Graph searching algorithm that enqueues all adjacent nodes then
 * dequeues and visits the first node
 */
export class BFS extends Graph {
  breadthFirstSearch(callback, node, visited = [], queue = []) {
    if (callback(this._graph[node].value)) {
      return this._graph[node].value;
    }
    visited.push(node);
    for (let connection of this._graph[node].connections) {
      if (!visited.includes(connection) && !queue.includes(connection)) {
        queue.push(connection);
      }
    }

    return queue.length > 0 ? this.breadthFirstSearch(callback, queue.shift(), visited, queue) : null;
  }
}
