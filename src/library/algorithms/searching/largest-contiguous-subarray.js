/**
 * Implementation of Kadane's algorithm to find the largest contiguous subarray.
 */
export class LargestContiguousSubarray {

  /**
   * Applies Kadane algorithm and returns total of subarray, start index and length.
   */
  _kadane(arr) {
    let start = 0;
    let maxStart = 0;
    let maxEnd = -1;
    let max = 0;
    let currentMax = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + currentMax > 0) {
        currentMax += arr[i];
      } else {
        start = i + 1;
        currentMax = 0;
      }
      if (currentMax > max) {
        max = currentMax
        maxStart = start;
        maxEnd = i;
      }
    }
    return [max, maxStart, maxEnd];
  }

  getSum(arr) {
    let [sum, start, end] = this._kadane(arr);
    return sum;
  }

  getIndeces(arr) {
    let [sum, start, end] = this._kadane(arr);
    return [start, end];
  }

  getSubarray(arr) {
    let [sum, start, end] = this._kadane(arr);
    return arr.slice(start, end + 1);
  }

}
