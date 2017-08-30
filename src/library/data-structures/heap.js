/*
State of heap is represented using array. Items in tree:
      1
    /  \
   2    3
  /\    /\
 4  5  6  7

Correspond to [1, 2, 3, 4 ...] where x / 2 rounded down is the index of the parent.

*/

export class Heap {
  constructor(comparisonFunction) {
    this._heap = [null];
    this._comparisonFunction = comparisonFunction;
  }

  add(value) {
    this._heap.push(value);
    this._bubbleUp(this._heap.length - 1);
  }

  _bubbleUp(index) {
    const parentIndex = Math.floor(index / 2);
    if (parentIndex > 0 && this._comparisonFunction(this._heap[index], this._heap[parentIndex])) {
      const temp = this._heap[index];
      this._heap[index] = this._heap[parentIndex]
      this._heap[parentIndex] = temp;
      this._bubbleUp(parentIndex);
    }
  }
}
