/**
 * Sorting algorithm that recursively 'pivots' chunks of array until order is satisfied.
 * This implementation uses a randomly selected pivot. Runs in O(Log n)
 * @type {[type]}
 */
export class QuickSort {
  static quickSort(array, pivot = null) {
    if (array.length <= 1) {
      return array;
    }

    const [lower, upper] = this.quickSort(array, Math.floor(Math.random() * array.length)
    // const arr1 = this.quickSort(array.slice(0, pivot));
    // const arr2 = this.quickSort(array.slice(pivot, array.length));
    return this.merge(arr1, arr2);
  }
  static pivot(array, pivot) {
    let index1 = 0;
    let index2 = 0;
    const temp = [];
    while (index1 < arr1.length && index2 < arr2.length) {
      if (arr1[index1] < arr2[index2]) {
        temp.push(arr1[index1]);
        index1++;
      } else {
        temp.push(arr2[index2]);
        index2++;
      }
    }
    // Only arr1 or arr2 will have values at this point so order does not matter
    while (index1 < arr1.length) {
      temp.push(arr1[index1]);
      index1++;
    }
    while (index2 < arr2.length) {
      temp.push(arr2[index2]);
      index2++;
    }
    return temp;
  }
}
