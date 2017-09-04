export class Graph {
  constructor(values, adjacencyMatrix) {
    this._graph = [];
    for (let i = 0; i < values.length; i++) {
      this._graph[i] = {
        value: value[i];
        connections: [];
      }
      for (let j = 0; j < adjacencyMatrix.length; j++) {
        if (adjacencyMatrix[j] === 1) {
          this._graph[i].connections.push(j);
        }
      }
    }
  }
}
