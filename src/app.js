import React from 'react';
import todoStore from './js/todoStore'
import 'babel-core/polyfill' //Får Object.assign att lira i applikationen

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

  doStuff() {
    todoStore.dispatch({ type: 'INCREMENT' });
  }

  render(){
    return(
      <div>
        <div onClick={this.doStuff}>
          HITME!
        </div>
        <span>{this.state.counter}</span>
      </div>
    );
  }
}

React.render(<App/>,document.getElementsByTagName('body')[0]);
