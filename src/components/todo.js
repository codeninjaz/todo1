import React from 'react'
import todoStore from '../js/todoStore'
import {AddToDoItemAction} from '../js/actions'
import Button from './button'
import Items from './items'

const items = [
  {
    id : 1,
  name : 'name1'
}, {
  id : 2,
  name : 'name2'
}, {
  id : 3,
  name : 'name3'
}]

export default class todo extends React.Component {
  constructor(props) {
    super(props)
  }

  getInitialState() {
    return {userInput:''};
  }

  addToDoItem(){
    todoStore.dispatch(AddToDoItemAction('temp'));
  }

  inputChange(e){
    this.setState({userInput: e.target.value});
  }

  render(){
    var boundClick = this.addToDoItem.bind(this);

    return(
      <div>
        <div>
          {this.props.name}
        </div>
        <div>
          <input type='text' />
        </div>
        <div>
          <Button onClick={boundClick} color={'rgb(196, 90, 240)'} value={'+'}/>
        </div>

        <Items data={items} />
      </div>
    );
  }
}
