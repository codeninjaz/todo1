import { createStore } from 'redux';

const initialState = {
  counter: 0
};

function counter(state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return Object.assign({}, state, {
      counter: state.counter + 1
    })
  case 'DECREMENT':
    return Object.assign({}, state, {
      counter: state.counter - 1
    })
  case 'MULTIPLY':
    return Object.assign({}, state, {
      counter: state.counter * 2
    })
  case 'RESET':
    return Object.assign({}, state, {
      counter: 0
    })
  default:
    return state;
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
var todoStore = createStore(counter);

export default todoStore;
