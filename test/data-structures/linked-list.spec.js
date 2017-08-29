import { LinkedList } from './../../src/library/data-structures/linked-list';
import { objectArray } from './../test-data/object-array';

const assert = require('assert');

describe('Linked List', () => {
  let linkedList;
  beforeEach(() => {
    linkedList = new LinkedList(false);
  });
  describe('#unshift()', () => {
    it('should insert values at the start of the list', () => {
      for (const item of objectArray) {
        linkedList.unshift(item);
      }
      assert.equal(linkedList.first.next.value.lastName, 'Roadknight');
      assert.equal(linkedList.getLength(), objectArray.length);
    });
  });
  describe('#shift()', () => {
    it('should remove values at the start of the list', () => {
      for (const item of objectArray) {
        linkedList.unshift(item);
      }
      const val = linkedList.shift();
      assert.equal(val.lastName, 'Hasty');
      assert.equal(linkedList.first.value.lastName, 'Roadknight');
      assert.equal(linkedList.getLength(), objectArray.length - 1);
    });
  });
  // describe('#insert()', () => {
  //   it('should insert a value', () => {
  //     hashTable.insert(sampleData[0].title, sampleData[0].content);
  //     // console.log(hashTable);
  //     // assert.equal(bst.getSize(), intArray.length);
  //   });
  //   it('should insert multiple values', () => {
  //     hashTable.insertArray(sampleData, 'title', 'content');
  //     // console.log(hashTable);
  //     // assert.equal(bst.getSize(), intArray.length);
  //   });
  // });
});
