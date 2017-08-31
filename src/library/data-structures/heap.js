/*
State of heap is represented using array. Items in tree:
      0
    /  \
   1    2
  /\    /\
 3  4  5  6

Correspond to [0, 1, 2, 3...] where (x-1) / 2 rounded down is the index of the parent.

*/

export class Heap {
  constructor(comparisonFunction) {
    this._heap = [];
    this._comparisonFunction = comparisonFunction;
  }

  add(value) {
    this._heap.push(value);
    this._bubbleUp(this._heap.length - 1);
  }

  extract() {
    const val = this._heap.shift();
    this._heapify();
    return val;
  }

  _heapify() {

  }

  _bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex > 0 && this._comparisonFunction(this._heap[index], this._heap[parentIndex])) {
      const temp = this._heap[index];
      this._heap[index] = this._heap[parentIndex]
      this._heap[parentIndex] = temp;
      this._bubbleUp(parentIndex);
    }
  }
}
