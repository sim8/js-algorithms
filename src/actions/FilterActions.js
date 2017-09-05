import dispatcher from './../dispatcher';

export function setSearchString(text) {
  dispatcher.dispatch({
    type: 'SET_SEARCHSTRING',
    text
  })
}

export function toggleTag(tagWord) {
  dispatcher.dispatch({
    type: 'TOGGLE_TAG',
    tagWord
  })
}
