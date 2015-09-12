import React from 'react'

const myStyle = {
  padding: '5px',
  margin: '2px',
  backgroundColor: 'rgb(249, 205, 108)',
  borderRadius: '2px',
  display: 'inline-block',
  cursor: 'pointer',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  textAlign: 'center',
  width: '100px'
}

export default class button extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    myStyle.backgroundColor=this.props.color;
    return(
      <div onClick={this.props.onClick} style={myStyle}>{this.props.value}</div>
    )
  }
}
