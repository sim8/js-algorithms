import { EventEmitter } from 'events';
import axios from 'axios';
import dispatcher from './../dispatcher';
import { appConfig } from './../config/app-config';

class CodeStore extends EventEmitter {
  constructor() {
    super();
    this.codeBase = [];
  }

  fetchCode(path) {
    if (this.codeBase.find(c => c.path === path)) {
      // Already fetched
      this.emit('fetched');
      return;
    }
    axios.get(appConfig.filesBaseURL + path).then(response => {
      this.codeBase.push({
        path,
        code: response.data
      })
      this.emit('fetched');
    });
  }

  getCode(path) {
    return this.codeBase.find(c => c.path === path).code;
  }

  handleActions(action) {
    switch (action.type) {
      case 'FETCH_CODE':
        this.fetchCode(action.path);
        break;
      default:
        break;
    }
  }
}

const codeStore = new CodeStore();
dispatcher.register(codeStore.handleActions.bind(codeStore));

export default codeStore;
