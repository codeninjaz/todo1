import React from 'react';
import todoStore from './js/todoStore'
import Button from './components/button'
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
          <Button onClick={this.doStuff} color={'rgb(138, 148, 240)'} value={'Hit: ' + this.state.counter}/>
      </div>
    );
  }
}

React.render(<App/>,document.getElementsByTagName('body')[0]);
