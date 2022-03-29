import React, { Component } from 'react'

export default class Values extends Component {
    render() {
        let values = this.props.values
        return (
            <p>Values:
            
                {values}
            </p>
        )
        
    }
}