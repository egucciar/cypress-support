import { compose, createStore } from 'redux';
import persistState from 'redux-localstorage'



document.addEventListener('DOMContentLoaded', run);
const enhancer = persistState(
  // Whitelist the state keys to store
  ['state'],
  // Config options
  {
    // The localstorage key to store the state in
    key: 'redux_test',
  }
)

function creator(state = { 'state': [] }, action) {
  state.state.push(action);
  return state;
}

const store = createStore(creator, enhancer)


function run() {

  for (let i = 0; i < Math.random() * 100; i++) {
    store.dispatch({
      type: 'test',
      test: i
    })
  }

  document.body.innerHTML = '<div id="test"></div>'

  for (let i = 0; i < Math.random() * 1000; i++) {
    store.dispatch({
      type: 'test',
      test: i
    })
  }
}
