class Node {
  constructor(value, isLastLetter) {
    this.value = value;
    this.isLastLetter = isLastLetter;
    this.children = [];
  }
}

/**
 * Tree structure also known as a suffix tree used for fast look up
 * of strings (autocomplete etc). Run in O(log n)
 */
export class Trie {
  constructor() {
    this.root = new Node(null, false);
  }

  addString(str, current = this.root) {
    if (!str) {
      return;
    }
    let match = current.children.find(n => n.value.toUpperCase() === str[0].toUpperCase());
    if (match) {
      this.addString(str.substr(1), match);
    } else {
      let child = new Node(str[0], str.length === 1);
      this.addString(str.substr(1), child);
      current.children.push(child);
    }
  }

  findStrings(str, current = this.root) {
    let strings = [];
    let match;
    let childStrings;

    if (current.isLastLetter) {
      strings.push(current.value);
    }

    if (str) {
      if (match = current.children.find(n => n.value.toUpperCase() === str[0].toUpperCase())) {
        childStrings = this.findStrings(str.substr(1), match);
      } else {
        return [];
      }
    } else {
      childStrings = current.children.map(child => this.findStrings(null, child));
    }

    let allStrings = childStrings.map(child => {
      return current.value ? current.value + child : child;
    });

    strings = strings.concat(allStrings);

    // strings = strings.concat(childStrings.map(s => (current.value || '') + s));
    return strings;
  }
}
