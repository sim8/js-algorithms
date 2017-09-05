import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';
import { libraryConfig } from './../config/library';

class AlgorithmStore extends EventEmitter {
  constructor() {
    super();
    this.algorithms = libraryConfig;
    this.searchString = '';
    this.tags = [];
    let tagWords = new Set([].concat.apply([], libraryConfig.map(a => a.tags)));
    for (let tagWord of tagWords) {
      this.tags.push({
        tagWord,
        isActive: false
      });
    }
  }

  getAll() {
    return this.algorithms;
  }

  getTags() {
    return this.tags;
  }

  getFiltered() {
    return this.algorithms.filter(a => {
      return a.name.includes(this.searchString);
    })
  }

  toggleTag(tagWord) {
    let tag = this.tags.find(t => t.tagWord === tagWord);
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
        this.toggleTag(action.tag);
        break;
    }
  }
}

const algorithmStore = new AlgorithmStore();
dispatcher.register(algorithmStore.handleActions.bind(algorithmStore));
window.ttt = algorithmStore.tags;

export default algorithmStore;
