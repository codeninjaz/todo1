import React from 'react'

const myStyle = {
  cursor: 'pointer',
  userSelect: 'none',
  WebkitUserSelect: 'none',
}

export default class button extends React.Component {
  constructor(props) {
    super(props)
  }

      // <div onClick={this.props.onClick} style={myStyle}>{this.props.value}</div>
  render(){
    return(
      <svg width={80} height={100}>
        <rect x="0" y="0" width="80" height="200" fill={this.props.color} style={myStyle} onClick={this.props.onClick} />
      </svg>
    )
  }
}
