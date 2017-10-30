import { Graph } from './../../data-structures/graph';

export class Dijkstra extends Graph {
  constructor() {
    super();
    this._graph.forEach(n => n.distance = 0);
    console.log(this);
  }
}
