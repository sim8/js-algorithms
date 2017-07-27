import { HashTable } from './../../src/library/data-structures/hash-table';

const assert = require('assert');

describe('Hash Table', () => {
  let hashTable;
  let sampleData;
  beforeEach(() => {
    hashTable = new HashTable(3);
    sampleData = [
      {
        'title': 'A Title',
        'content': 'Here is some data'
      },
      {
        'title': 'Another Title',
        'content': 'Here is some more data'
      },
      {
        'title': 'A Further Title',
        'content': 'Here is some further data'
      },
      {
        'title': 'An Additional Title',
        'content': 'Here is some additional data'
      },
      {
        'title': 'An Extra Title',
        'content': 'Here is some extra data'
      },
    ]
  });
  describe('#hash()', () => {
    it('should return ca hash value for a given string', () => {
      const hashCode = hashTable.hash(sampleData[0].title);
      console.log(hashCode);
    });
  });
  describe('#insert()', () => {
    it('should insert a value', () => {
      hashTable.insert(sampleData[0].title, sampleData[0].content);
      console.log(hashTable);
      // assert.equal(bst.getSize(), intArray.length);
    });
    it('should insert multiple values', () => {
      hashTable.insert(sampleData[0].title, sampleData[0].content);
      console.log(hashTable);
      // assert.equal(bst.getSize(), intArray.length);
    });
  });
});
