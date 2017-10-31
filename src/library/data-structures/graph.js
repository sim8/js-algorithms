export class Graph {
  constructor(values, adjacencyMatrix, isWeighted) {
    this._graph = [];
    for (let i = 0; i < values.length; i++) {
      this._graph[i] = {
        value: values[i],
        connections: []
      }
      for (let j = 0; j < adjacencyMatrix[i].length; j++) {
        if (isWeighted && adjacencyMatrix[i][j] !== Infinity) {
          this._graph[i].connections.push({
            node: j,
            weight: adjacencyMatrix[i][j]
          });
        } else if (!isWeighted && adjacencyMatrix[i][j] === 1) {
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
