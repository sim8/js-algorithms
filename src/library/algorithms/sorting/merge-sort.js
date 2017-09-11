/**
 * Simple sorting algorithm that runs in O(Log n) time with O(n) space complexity.
 * @type {[type]}
 */
export class MergeSort {
  sort(array) {
    if (array.length <= 1) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const arr1 = this.sort(array.slice(0, middle));
    const arr2 = this.sort(array.slice(middle, array.length));
    return this.merge(arr1, arr2);
  }
  merge(arr1, arr2) {
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
