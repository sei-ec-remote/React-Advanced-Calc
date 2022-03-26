import React, { Component } from 'react'
import Button from './Button'

export default class Button extends Component {

    render() {
        const { onclick } = this.props;

        return(
            <>
            <div className="calc-row">       
                <Button btnType="AC" className="calc-button calc-button-top" onclick={onclick}/>
                <Button btnType="+/-" className="calc-button calc-button-top"onclick={onclick}/>
                <Button btnType="%" className="calc-button calc-button-top" onclick={onclick}/>
                <Button btnType="/" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button btnType="7" className="calc-button" onclick={onclick}/>
                <Button btnType="8" className="calc-button" onclick={onclick}/>
                <Button btnType="9" className="calc-button" onclick={onclick}/>
                <Button btnType="x" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button btnType="4" className="calc-button" onclick={onclick}/>
                <Button btnType="5" className="calc-button" onclick={onclick}/>
                <Button btnType="6" className="calc-button" onclick={onclick}/>
                <Button btnType="-" className="calc-button calc-button-op"onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button btnType="1" className="calc-button" onclick={onclick}/>
                <Button btnType="2" className="calc-button" onclick={onclick}/>
                <Button btnType="3" className="calc-button" onclick={onclick}/>
                <Button btnType="+" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            <div className="calc-row">
                <Button btnType="0" className="calc-button width-2"onclick={onclick}/>
                <Button btnType="." className="calc-button"onclick={onclick}/>
                <Button btnType="=" className="calc-button calc-button-op" onclick={onclick}/>
            </div>
            </>
        )
    }
}