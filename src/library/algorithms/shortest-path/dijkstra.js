import { Graph } from './../../data-structures/graph';

export class Dijkstra extends Graph {
  constructor(...args) {
    super(...args);
    this._graph.forEach(n => n.distance = 0);
    console.log(this);
  }
}
