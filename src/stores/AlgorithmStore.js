import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';
import { libraryConfig } from './../config/library';

class AlgorithmStore extends EventEmitter {
  constructor() {
    super();
    this.algorithms = libraryConfig;
    this.searchString = '';
    this.tags = [];
    const tagWords = new Set([].concat.apply([], libraryConfig.map(a => a.tags)));
    for (const tagWord of tagWords) {
      this.tags.push({
        tagWord,
        isActive: false
      });
    }
    this.tags.sort((a, b) => a.tagWord > b.tagWord);
  }

  getAll() {
    return this.algorithms;
  }

  getTags() {
    return this.tags;
  }

  getFiltered() {
    let filtered = this.algorithms.filter(a => {
      return a.name.toUpperCase().includes(this.searchString.toUpperCase());
    });
    for (const tag of this.tags.filter(t => t.isActive)) {
      filtered = filtered.filter(a => a.tags.includes(tag.tagWord));
    }
    return filtered;
  }

  toggleTag(tagWord) {
    const tag = this.tags.find(t => t.tagWord === tagWord);
    tag.isActive = !tag.isActive;
    this.emit('change');
  }

  setSearchString(text) {
    this.searchString = text;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'SET_SEARCHSTRING':
        this.setSearchString(action.text);
        break;
      case 'TOGGLE_TAG':
        this.toggleTag(action.tagWord);
        break;
    }
  }
}

const algorithmStore = new AlgorithmStore();
dispatcher.register(algorithmStore.handleActions.bind(algorithmStore));
window.ttt = algorithmStore.tags;

export default algorithmStore;
