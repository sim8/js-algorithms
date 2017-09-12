import { Trie } from './../../src/library/data-structures/trie';

const assert = require('assert');

describe('Trie', () => {
  let trie;
  let strings;
  beforeEach(() => {
    trie = new Trie();
    ['Apple', 'Application', 'Orange', 'Avocado', 'Apricot', 'Banana'].forEach(str => {
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

      //REMOVE
      trie = new Trie();
      ['App', 'Arg'].forEach(str => {
        trie.addString(str);
      });
      assert.deepEqual(trie.getStrings(), ['App', 'Arg']);

      // assert.deepEqual(trie.getStrings(), ['Apple', 'Orange', 'Avocado', 'Apricot', 'Banana']);
    });
    it('should not find any words that do not match a given prefix', () => {
      assert.deepEqual(trie.getStrings('Mango'), []);
      assert.deepEqual(trie.getStrings('Aardvark'), []);
    });
  });
});
