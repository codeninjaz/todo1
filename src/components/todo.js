import React from 'react'
import todoStore from '../js/todoStore'
import {AddToDoItemAction} from '../js/actions'
import Button from './button'
import Items from './items'

export default class todo extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount(){
    todoStore.subscribe(() =>{
        this.setState(todoStore.getState());
      }
    );
  }

  addToDoItem(){
    let input = React.findDOMNode(this.refs.todoItemInput).value;
    //todo: validera input pörhaps!
    todoStore.dispatch(AddToDoItemAction(input));
  }

  render(){
    return(
      <div>
        <div>
          {this.props.name}
        </div>
        <div>
          <input type='text' ref='todoItemInput'/>
        </div>
        <div>
          <Button onClick={this.addToDoItem.bind(this)} color={'rgb(196, 90, 240)'} value={'+'}/>
        </div>

        <Items data={this.state.todos} />
      </div>
    );
  }
}
