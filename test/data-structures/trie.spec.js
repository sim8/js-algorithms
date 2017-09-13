import { Trie } from './../../src/library/data-structures/trie';

const assert = require('assert');

describe('Trie', () => {
  let trie;
  let strings;
  beforeEach(() => {
    trie = new Trie();
    strings = ['Apple', 'Orange', 'Avocado', 'Apricot', 'Banana'];
    strings.forEach(str => {
      trie.addString(str);
    });
  });
  describe('#addString()', () => {
    it('should add strings while maintaining the Trie structure', () => {
      ['Potato', 'Tomato', 'Spinach'].forEach(str => {
        trie.addString(str);
      });
    });
  });
  describe('#getStrings()', () => {
    it('should find inserted strings that match a given prefix', () => {
      assert.deepEqual(trie.getStrings('Ap'), ['Apple', 'Apricot']);
      assert.deepEqual(trie.getStrings('Banana'), ['Banana']);
    });
    it('should find all inserted strings when no prefix is provided', () => {
      assert.deepEqual(trie.getStrings().sort(), strings.sort());
    });
    it('should not find any words that do not match a given prefix', () => {
      assert.deepEqual(trie.getStrings('Mango'), []);
      assert.deepEqual(trie.getStrings('Aardvark'), []);
    });
  });
});
