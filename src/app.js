import React from 'react'
import todoStore from './js/todoStore'
import Button from './button'
import 'babel-core/polyfill' // Får Object.assign att lira i applikationen
import './style/baseStyle.scss'
import uuid from 'node-uuid'
import {addNodeAction, logAction, findAction} from './js/actions'

export class App extends React.Component {
  constructor( props) {
    super(props)
    this.idString = ''
    this.state = todoStore.getState()
  }

  componentDidMount() {
    todoStore.subscribe(() => {
      this.setState(todoStore.getState())
    }
    )
  }

  addNode() {
    todoStore.dispatch(addNodeAction({
      id: uuid.v4(),
      color: '#0000ff'
    }))
  }

  logNodes() {
    todoStore.dispatch(logAction())
  }

  findNode() {
    todoStore.dispatch(findAction(this.idString))
  }

  handleIdChange(event){
    this.idString = event.target.value;
  }

  render() {
    return (
    <div>
      <Button onClick={this.addNode} color={ 'rgba(13, 20, 231, 1)'} value={ 'Mult'}/>
      <Button onClick={this.logNodes} color={ 'rgba(13, 200, 21, 1)'} value={ 'Mult'}/>
      <Button onClick={this.findNode.bind(this)} color={ 'rgba(54, 180, 121, 1)'} value={ 'Mult'}/>
      <input type="text" value={this.idString} onChange={this.handleIdChange.bind(this)} />
      <h1>{this.state.message}</h1>
      <h1>{this.state.root.children.length}</h1>
    </div>
    )
  }
}
