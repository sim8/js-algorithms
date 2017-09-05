import dispatcher from './../dispatcher';

export function setSearchString(text) {
  dispatcher.dispatch({
    type: 'SET_SEARCHSTRING',
    text
  })
}
