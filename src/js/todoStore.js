import { createStore } from 'redux';

const initialState = {
  counter: 0,
  message: ''
};

const initialToDoState = {
  name : 'default',
  todos : []
}

function counter(state = initialState, action) {
  switch (action.type) {
  case 'INCREMENT':
    return Object.assign({}, state, {
      counter: state.counter + action.value,
      message: 'Added ' + action.value
    })
  case 'DECREMENT':
    return Object.assign({}, state, {
      counter: state.counter - action.value,
      message: 'Subtracted ' + action.value
    })
  case 'MULTIPLY':
    return Object.assign({}, state, {
      counter: state.counter * action.value,
      message: 'Multiplied by ' + action.value
    })
  case 'RESET':
    return Object.assign({}, state, {
      counter: action.value,
      message: 'Reset'
    })
  default:
    return state;
  }
}

function todo(state = initialToDoState, action) {
    switch (action.type) {
      case 'ADDTODOITEM':
        state.todos.push(action.value);
        return Object.assign({}, state, {
          name : 'default',
          todos : state.todos
        })
      default:
        return state;
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
var todoStore = createStore(todo);

export default todoStore;
