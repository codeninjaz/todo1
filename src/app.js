import React from 'react';
import todoStore from './js/todoStore'
import Button from './components/button'
import 'babel-core/polyfill' //Får Object.assign att lira i applikationen
import './style/baseStyle.scss'

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
    todoStore.dispatch({ type: 'INCREMENT' });
  }

  decrementCounter() {
    todoStore.dispatch({ type: 'DECREMENT' });
  }

  render(){
    return(
      <div>
          <Button onClick={this.incrementCounter} color={'rgba(78, 179, 53, 0.7)'} value={'Up'}/>&nbsp;
          <Button onClick={this.decrementCounter} color={'rgb(240, 144, 90)'} value={'Down'}/>
          <h1>{this.state.counter}</h1>
      </div>
    );
  }
}

React.render(<App/>,document.getElementsByTagName('body')[0]);
