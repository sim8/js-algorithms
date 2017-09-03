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
    this.heapify();
    return val;
  }

  heapify() {
    let parentIndex = Math.floor((this._heap.length - 2) / 2);
    console.log('par: ', parentIndex);
    while (parentIndex >= 0) {
      this._siftDown(parentIndex);
      parentIndex--;
    }
  }

  _siftDown(parentIndex) {

    let extremumChild = parentIndex * 2 + 1; // left
    if (this._heap.length > extremumChild + 2 &&
        this._comparisonFunction(this._heap[extremumChild], this._heap[extremumChild + 1])) {
      extremumChild++; // right
    }
    if (this._comparisonFunction(this._heap[extremumChild], this._heap[parentIndex])) {
      let temp = this._heap[parentIndex];
      this._heap[parentIndex] = this._heap[extremumChild];
      this._heap[extremumChild] = temp;
      if (this._heap.length >= extremumChild * 2) {
        this._siftDown(extremumChild * 2 + 1);
      }
    }
  }

  _bubbleUp(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this._comparisonFunction(this._heap[index], this._heap[parentIndex])) {
      const temp = this._heap[index];
      this._heap[index] = this._heap[parentIndex]
      this._heap[parentIndex] = temp;
      this._bubbleUp(parentIndex);
    }
  }
}
