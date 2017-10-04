import { InsertionSort } from './insertion-sort';

export class BucketSort {
  constructor() {
    this.insertionSort = new InsertionSort();
  }

  sort(arr) {
    let buckets = [];
    let sortedArr = [];
    for (let num of arr) {
      let index = Math.floor(num);
      buckets[index] = buckets[index] || [];
      buckets[index].push(num)
    };
    for (let bucket of buckets) {
      if (bucket) {
        this.insertionSort.sort(bucket);
        sortedArr = sortedArr.concat(bucket);
      }
    }
    return sortedArr;
  }
}
