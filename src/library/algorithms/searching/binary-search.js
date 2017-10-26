export class BinarySearch {

  /**
   * Executes binary search of provided array for value, returning true if found
   */
  find(arr, val) {
    let start = 0;
    let end = arr.length - 1;
    let middle;
    while (true) {
      middle = Math.floor(start + ((end - start) / 2));
      if (val === arr[middle]) {
        return true;
      }
      if (end <= start) {
        return false;
      }
      if (val < arr[middle]) {
        end = middle;
      }
      if (val > arr[middle]) {
        start = middle + 1;
      }
      console.log('mid', start);
      console.log('end', end);
    }

  }
}
