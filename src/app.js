import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div>
        RÖV
      </div>
    );
  }
}

React.render(<App/>,document.getElementsByTagName('body')[0]);
