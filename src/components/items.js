import React from 'react'
import Button from './button'
import Item from './item'

export default class items extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div>
        {this.props.data.map(function(result) {
            return <Item key={result.id} value={result.name} />
        })}
      </div>
    );
  }
}
