import React, { Component } from 'react'


export default class CurrentValue extends Component {
  render() {
    return (
      <>
        <p>{this.props.value} </p> 
      </>
    )
  }
}
