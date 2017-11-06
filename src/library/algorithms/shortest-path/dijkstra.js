import { Graph } from './../../data-structures/graph';
import { Heap } from './../../data-structures/heap';

export class Dijkstra extends Graph {
  constructor(...args) {
    super(...args);
    this.unvisited = new Heap((a, b) => {return a.distance > b.distance});
    this._graph.forEach(n => {
       n.distance = Infinity;
       this.unvisited.add(n);
    });

    this.visited = [];
  }

  shortestPath(from, to, currentDistance = 0) {
    this._graph[from].connections.forEach(connection => {
      if (!this.visited.includes(connection.node)) {
        this._graph[connection.node].distance = Math.min(
          this._graph[connection.node].distance,
          currentDistance + connection.weight
        );
        if (connection.node === to) {
          return this._graph[connection.node].distance;
        }
      }
    });
    this.unvisited.heapify();
    let next = this.unvisited.extract();
    if (!next) {
      return null;
    } else {
      let index = this._graph.indexOf(next);
      this.shortestPath(index, to, this._graph[index].distance);
  }
}
