import { HashTable } from './../../src/library/data-structures/hash-table';

const assert = require('assert');

describe('Hash Table', () => {
  let hashTable;
  let sampleData;
  beforeEach(() => {
    hashTable = new HashTable(40);
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
    it('should return a hash value for a given string', () => {
      const hashCode = hashTable.hash(sampleData[0].title);
      assert(!isNaN(hashCode) && hashCode > 0);
    });
  });
  describe('#insert()', () => {
    it('should insert a value', () => {
      hashTable.insert(sampleData[0].title, sampleData[0].content);
      // console.log(hashTable);
      // assert.equal(bst.getSize(), intArray.length);
    });
    it('should insert multiple values', () => {
      hashTable.insertArray(sampleData, 'title', 'content');
      // console.log(hashTable);
      // assert.equal(bst.getSize(), intArray.length);
    });
  });
  describe('#find()', () => {
    it('should find an inserted value', () => {
      hashTable.insertArray(sampleData, 'title', 'content');
      assert.equal(hashTable.find(sampleData[2].title), sampleData[2].content);
    });
    it('should not find a non inserted value', () => {
      hashTable.insertArray(sampleData, 'title', 'content');
      assert.equal(hashTable.find('Non-existent value'), null);
    });
    it('should not find a value when table is empty', () => {
      assert.equal(hashTable.find(sampleData[2].title), null);
    });
  });
  describe('#delete()', () => {
    it('should delete an inserted value', () => {
      hashTable.insertArray(sampleData, 'title', 'content');
      assert.equal(hashTable.delete(sampleData[2].title), true);
    });
    it('should not delete a non inserted value', () => {
      hashTable.insertArray(sampleData, 'title', 'content');
      assert.equal(hashTable.delete('Non-existent value'), false);
    });
  });
});
