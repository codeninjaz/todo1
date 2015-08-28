import React from 'react';
import todoStore from './js/todoStore'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    todoStore.subscribe(() =>
      console.log(todoStore.getState())
    );
  }

  doStuff() {
    todoStore.dispatch({ type: 'INCREMENT' });
  }

  render(){
    return(
      <div onClick={this.doStuff}>
        RÖV
      </div>
    );
  }
}

React.render(<App/>,document.getElementsByTagName('body')[0]);
