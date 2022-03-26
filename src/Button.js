import React, { Component } from 'react'

export default class Button extends Component {

    render() {
        const { btnType, className, onclick } = this.props;

        return(
            <button type="button" className={className} onClick={() => onclick(btnType)}>
            {btnType}
            </button>
        )
    }
}