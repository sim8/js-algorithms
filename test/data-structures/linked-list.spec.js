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
    it('should remove values from the start of the list', () => {
      for (const item of objectArray) {
        linkedList.unshift(item);
      }
      const val = linkedList.shift();
      assert.equal(val.lastName, 'Hasty');
      assert.equal(linkedList.first.value.lastName, 'Roadknight');
      assert.equal(linkedList.getLength(), objectArray.length - 1);
    });
  });
  describe('#push()', () => {
    it('should insert values at the end of the list', () => {
      for (const item of objectArray) {
        linkedList.push(item);
      }
      assert.equal(linkedList.first.value.lastName, 'Baxster');
      assert.equal(linkedList.first.next.value.lastName, 'Swiffen');
      assert.equal(linkedList.getLength(), objectArray.length);
      assert.equal(linkedList.last.prev.value.lastName, 'Roadknight');
    });
  });
  describe('#pop()', () => {
    it('should remove values from the end of the list', () => {
      for (const item of objectArray) {
        linkedList.push(item);
      }
      const val = linkedList.pop();
      assert.equal(val.lastName, 'Hasty');
      assert.equal(linkedList.last.value.lastName, 'Roadknight');
      linkedList.map(item => console.log('>', item.lastName));
      assert.equal(linkedList.getLength(), objectArray.length - 1);

    });
  });

});
