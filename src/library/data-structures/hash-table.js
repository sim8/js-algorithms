export class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }

  append(node) {
    if (this.next) {
      this.next.append(node);
    } else {
      this.next = node;
    }
  }
}

export class HashTable {
  constructor(totalBuckets) {
    this._table = [];
    this._tableSize = totalBuckets;
  }

  /**
   * Implementation of Java hashcode method modified to return absolute numbers
   * @param  {string} str string to be hashed
   * @return {number}       the generated hashcode
   */
  hash(str) {
    let hash = 0;
    let chr;
    if (str.length === 0) return hash;
    for (let i = 0; i < str.length; i++) {
      chr = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return Math.abs(hash);
  }

  insert(key, value) {
    const index = this.hash(key) % this._tableSize;
    const node = new Node(key, value);
    if (this._table[index]) {
      this._table[index].append(node);
    } else {
      this._table[index] = node;
    }
  }
}
