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
