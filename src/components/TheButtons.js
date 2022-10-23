import React, { Component } from "react"

export default class TheButtons extends Component {
    render() {
        return (
            <>
                <div className="calc-row">
                    <button onClick={this.props.clear} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.props.negate} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.props.inputOp} className="calc-button calc-button-top">%</button>
                    <button onClick={this.props.inputOp} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.props.inputChar} className="calc-button">7</button>
                    <button onClick={this.props.inputChar} className="calc-button">8</button>
                    <button onClick={this.props.inputChar} className="calc-button">9</button>
                    <button onClick={this.props.inputOp} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.props.inputChar} className="calc-button">4</button>
                    <button onClick={this.props.inputChar} className="calc-button">5</button>
                    <button onClick={this.props.inputChar} className="calc-button">6</button>
                    <button onClick={this.props.inputOp} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.props.inputChar} className="calc-button">1</button>
                    <button onClick={this.props.inputChar} className="calc-button">2</button>
                    <button onClick={this.props.inputChar} className="calc-button">3</button>
                    <button onClick={this.props.inputOp} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.props.inputChar} className="calc-button width-2">0</button>
                    <button onClick={this.props.inputChar} className="calc-button">.</button>
                    <button onClick={this.props.evaluate} className="calc-button calc-button-op">=</button>
                </div>
            </>
        )
    }
}