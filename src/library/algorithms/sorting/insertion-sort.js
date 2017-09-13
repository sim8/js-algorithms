/*
 * Simple sorting algorithm that iterates over a sorted subportion of the array
 * and compares with the element to sort. Runs in O(n)
 */
export class InsertionSort {
  sort(array) {
    for (let i = 1; i < array.length; i++) {
      for (let j = 0; j < i; j++) {
        if (array[i] < array[j]) {
          let temp = array.splice(i, 1)[0];
          array.splice(j, 0, temp);
        }
      }
    }
    return array;
  }
}
