import React, { Component } from 'react'
import Button from './Button'

export default class Button extends Component {

    render() {

        // setup function onclick to be called
        const { onclick } = this.props;

        return(
            <>
            <div className="calc-row">       
                <Button name="AC" className="calc-button calc-button-top" onclick={onclick}/>
                <Button name="+/-" className="calc-button calc-button-top" onclick={onclick}/>
                <Button name="%" className="calc-button calc-button-top" onclick={onclick}/>
                <Button name="/" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button name="7" className="calc-button" onclick={onclick}/>
                <Button name="8" className="calc-button" onclick={onclick}/>
                <Button name="9" className="calc-button" onclick={onclick}/>
                <Button name="x" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button name="4" className="calc-button" onclick={onclick}/>
                <Button name="5" className="calc-button" onclick={onclick}/>
                <Button name="6" className="calc-button" onclick={onclick}/>
                <Button name="-" className="calc-button calc-button-op"onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button name="1" className="calc-button" onclick={onclick}/>
                <Button name="2" className="calc-button" onclick={onclick}/>
                <Button name="3" className="calc-button" onclick={onclick}/>
                <Button name="+" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button name="0" className="calc-button width-2"onclick={onclick}/>
                <Button name="." className="calc-button"onclick={onclick}/>
                <Button name="=" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            </>
        )
    }
}