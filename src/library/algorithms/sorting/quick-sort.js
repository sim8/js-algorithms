/**
 * Sorting algorithm that recursively 'pivots' chunks of array until order is satisfied.
 * This implementation uses a randomly selected pivot. Runs in O(Log n)
 * @type {[type]}
 */
export class QuickSort {

  constructor() {
    this.callStack = 0;
  }

  sort(array, callStack = 0) {
    this.callStack += 1;

    // Return if all values the same
    if (array.every((el, i, arr) => el === arr[0])) {
      return array;
    }

    const pivot = Math.floor(Math.random() * array.length);
    let lower = array.filter(i => i <= array[pivot]);
    let upper = array.filter(i => i > array[pivot]);

    // console.log(lower.toString());
    // console.log(upper.toString());

    try {
      lower = this.sort(lower);
      upper = this.sort(upper);
    } catch (e) {
      console.log('Callstack: ', this.callStack);
    }
    return lower.concat(upper);
    // return this.quickSort(lower).concat(this.quickSort(upper));

  }
}
