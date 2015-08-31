export function incrementAction(value){
  return {
    type: 'INCREMENT',
    value: value
 }
}

export function decrementAction(value){
  return {
    type: 'DECREMENT',
    value: value
 }
}

export function multiplyAction(value){
  return {
    type: 'MULTIPLY',
    value: value
 }
}


export function AddToDoItemAction(value){
  return {
    type: 'ADDTODOITEM',
    value: value
  }
}

export function resetAction(value=0){
  return {
    type: 'RESET',
    value: value
 }
}
