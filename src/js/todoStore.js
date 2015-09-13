import { createStore } from 'redux'
import _ from 'lodash'

// Define store shape
const initialState = {
  root: {
    id: 1,
    color: '#00FF00',
    children: []
  },
  message: ''
}

function logNode(key,value) {
    console.log(key + " : "+value);
}

function traverse(o,func) {
    for (var i in o) {
        func.apply(this,[i,o[i]]);
        if (o[i] !== null && typeof(o[i])=="object") {
            //going on step down in the object tree!!
            traverse(o[i],func);
        }
    }
}

function find(o, id) {
    for (var i in o) {
        if(o[i].id === id) return o[i];
        if (o[i] !== null && typeof(o[i])=="object") {
            find(o[i]);
        }
    }
}

function findNode(id){
  return find(state, id)
}

function nodeStore (state = initialState, action) {
  switch (action.type) {
    case 'ADDNODE':
      state.root.children.push(action.value)
      return Object.assign({}, state, {
        root: state.root,
        message: 'Added node'
      })
    case 'LOGTREE':
      traverse(state,logNode)
      return state
    case 'FINDNODE':
      find(state,action.id)
      return state
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
var todoStore = createStore(nodeStore)

export default todoStore
