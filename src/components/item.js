import React from 'react'
import Button from './button'

export default class item extends React.Component {
  constructor(props) {
    super(props)
  }

  markAsFinnished() {

  }

  render(){
    return(
      <div key={this.props.key}>
        {this.props.value}
        <Button onClick={this.markAsFinnished} color={'rgb(196, 90, 240)'} value={'Done'}/>
      </div>
    );
  }
}
