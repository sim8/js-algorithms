/**
 * Sorting algorithm that recursively 'pivots' chunks of array until order is satisfied.
 * This implementation uses a randomly selected pivot. Runs in O(Log n)
 */
export class QuickSort {

  sort(array) {

    // Return if all values the same
    if (array.every((el, i, arr) => el === arr[0])) {
      return array;
    }

    const pivot = Math.floor(Math.random() * array.length);
    let lower = array.filter(i => i <= array[pivot]);
    let upper = array.filter(i => i > array[pivot]);

    lower = this.sort(lower);
    upper = this.sort(upper);
    
    return lower.concat(upper);
  }
}
