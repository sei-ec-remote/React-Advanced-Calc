import React, { Component } from 'react'

export default class EquationBox extends Component {
  render() {
    return (
        <div className="equation-box">{this.props.equation}</div>
    )
  }
}
