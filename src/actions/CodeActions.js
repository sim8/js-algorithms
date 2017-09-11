import dispatcher from './../dispatcher';

export function fetchCode(path) {
  dispatcher.dispatch({
    type: 'FETCH_CODE',
    path
  })
}
