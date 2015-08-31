import React from 'react';
import todoStore from './js/todoStore'
import Todo from './components/todo'
import Button from './components/button'
import 'babel-core/polyfill' //Får Object.assign att lira i applikationen
import './style/baseStyle.scss'
import {incrementAction, decrementAction, multiplyAction, resetAction} from './js/actions'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
          <Todo name="jesus" />
          <Todo name="tjoho"/>
          <Todo name="asd" />
      </div>
    );
  }
}

React.render(<App/>,document.getElementsByTagName('body')[0]);
