export function addNodeAction(node){
  return {
    type: 'ADDNODE',
    value: node
 }
}

export function logAction(node){
  return {
    type: 'LOGTREE'
 }
}

export function findAction(id){
  return {
    type: 'FINDNODE',
    id: id
 }
}
