import React, { Component } from 'react'

export default class Button extends Component {

    render() {
        // Deconstruct this.props to name, className, and onclick function
        const { name, className, onclick } = this.props;

        return(
            <button type="button" className={className} onClick={ () => onclick(name) }>
            {name}
            </button>
        )
    }
}