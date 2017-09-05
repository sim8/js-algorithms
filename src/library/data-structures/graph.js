export class Graph {
  constructor(values, adjacencyMatrix) {
    this._graph = [];
    for (let i = 0; i < values.length; i++) {
      this._graph[i] = {
        value: values[i],
        connections: []
      }
      for (let j = 0; j < adjacencyMatrix[i].length; j++) {
        if (adjacencyMatrix[i][j] === 1) {
          this._graph[i].connections.push(j);
        }
      }
    }
  }

  print() {
    this._graph.map(node => {
      console.log(node.value, node.connections.toString());
    })
  }
}
