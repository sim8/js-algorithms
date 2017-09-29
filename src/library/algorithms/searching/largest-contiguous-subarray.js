/**
 * Implementation of Kadane's algorithm to find the largest contiguous subarray.
 */
export class LargestContiguousSubarray {

  /**
   * Applies Kadane algorithm and returns total of subarray, start index and length.
   */
  _kadane(arr) {
    let start = 0;
    let end = 0;
    let max = 0;
    let currentMax = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + currentMax > 0) {
        currentMax = arr[i];
        start = i;
      }
      if (currentMax > max) {
        max = currentMax
        end = i;
      }
    }
    return [max, start, end];
  }

  getSum(arr) {
    let [sum, start, end] = this._kadane(arr);
    return sum;
  }

  getIndeces(arr) {
    let [sum, start, end] = this._kadane(arr);
    return [start, end];
  }

}
