import { EventEmitter } from 'events';
import dispatcher from './../dispatcher';
import { libraryConfig } from './../config/library';

class AlgorithmStore extends EventEmitter {
  constructor() {
    super();
    this.algorithms = libraryConfig;
    this.tags = libraryConfig.map(a => a.tags);
    this.searchString = '';
  }

  getAll() {
    return this.algorithms;
  }

  getFiltered() {
    return this.algorithms.filter(a => {
      return a.name.includes(this.searchString);
    })
  }

  setSearchString(text) {
    this.searchString = text;
    this.emit('change');
  }

  handleActions(action) {
    switch(action.type) {
      case 'SET_SEARCHSTRING': {
        this.setSearchString(action.text);
      }
    }
  }
}

const algorithmStore = new AlgorithmStore();
dispatcher.register(algorithmStore.handleActions.bind(algorithmStore));

export default algorithmStore;
