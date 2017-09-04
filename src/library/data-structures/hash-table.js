class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }

  find(key) {
    return key === this.key ? this.value : this.next && this.next.find(key) || null;
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

  insertArray(array, keyProp, valueProp) {
    for (const item of array) {
      this.insert(item[keyProp], item[valueProp]);
    }
  }

  find(key) {
    const index = this.hash(key) % this._tableSize;
    return this._table[index] ? this._table[index].find(key) : null;
  }

  empty() {
    this._table = [];
  }

  delete(key) {
    const index = this.hash(key) % this._tableSize;
    if (this._table[index]) {
      let current = this._table[index];
      let previous;
      while (current) {
        if (current.key === key) {
          if (previous) {
            previous.next = current.next;
          } else {
            this._table[index] = current.next;
          }
          return true;
        }
        previous = current;
        current = current.next;
      }
    }
    return false;
  }
}
