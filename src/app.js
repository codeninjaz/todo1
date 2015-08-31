import React from 'react';
import todoStore from './js/todoStore'
import Button from './components/button'
import 'babel-core/polyfill' //Får Object.assign att lira i applikationen
import './style/baseStyle.scss'
import {incrementAction, decrementAction, multiplyAction, resetAction} from './js/actions'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state=todoStore.getState();
  }

  componentDidMount(){
    todoStore.subscribe(() =>{
        this.setState(todoStore.getState());
      }
    );
  }

  incrementCounter() {
    todoStore.dispatch(incrementAction(7));
  }

  decrementCounter() {
    todoStore.dispatch(decrementAction(8));
  }

  multiplyCounter() {
    todoStore.dispatch(multiplyAction(3));
  }

  resetCounter() {
    todoStore.dispatch(resetAction(1));
  }

  render(){
    return(
      <div>
          <Button onClick={this.multiplyCounter} color={'rgba(213, 211, 31, 0.7)'} value={'Mult'}/>&nbsp;
          <Button onClick={this.incrementCounter} color={'rgba(78, 179, 53, 0.7)'} value={'Up'}/>&nbsp;
          <Button onClick={this.decrementCounter} color={'rgb(240, 144, 90)'} value={'Down'}/>&nbsp;
          <Button onClick={this.resetCounter} color={'rgb(196, 90, 240)'} value={'Reset'}/>
          <h1>{this.state.message}</h1>
          <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

React.render(<App/>,document.getElementsByTagName('body')[0]);
