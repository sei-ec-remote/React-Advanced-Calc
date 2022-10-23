import React, { Component } from "react"

export default class InputButton extends Component {
    render () {
        return (
            <button className="calc-button">{this.props.input}</button>
        )
    }
}