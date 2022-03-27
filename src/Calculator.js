import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor () {
        super ()
            this.state = {
                buttonValues: [
                    ["AC", "+-", "%", "/"],
                    ["7", "8", "9", "x"],
                    ["4", "5", "6", "-"],
                    ["1", "2", "3", "+"],
                    ["0", ".", "="]
                ]
        }
        //log the state of the button values array
        console.log('this is the state', this.state)
    }
    setNum = (e, name) => {
        console.log('this is the clicked value:', e.target.name)
        this.setState({ [name]: parseInt(e.target.name)});
      }
      
    //Each button will need an onClick to the e.target.value
    //need this.props => pass data from parent component to child component
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button name="AC" className="calc-button calc-button-top"  >AC</button>
                    <button name="+-" className="calc-button calc-button-top" >+/-</button>
                    <button name="%" className="calc-button calc-button-top" >%</button>
                    <button name="/" className="calc-button calc-button-op" >/</button>
                </div>
                <div className="calc-row">
                    <button name="7" className="calc-button" onClick={ (e) => this.setNum(e, '7') } >7</button>
                    <button name="8" className="calc-button" onClick={ (e) => this.setNum(e, '8') } >8</button>
                    <button name="9" className="calc-button" onClick={ (e) => this.setNum(e, '9') } >9</button>
                    <button name="x" className="calc-button calc-button-op" >x</button>
                </div>
                <div className="calc-row">
                    <button name="4" className="calc-button" onClick={ (e) => this.setNum(e, '4') }>4</button>
                    <button name="5" className="calc-button" onClick={ (e) => this.setNum(e, '5') } >5</button>
                    <button name="6" className="calc-button" onClick={ (e) => this.setNum(e, '6') } >6</button>
                    <button name="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button name="1" className="calc-button" onClick={ (e) => this.setNum(e, '1') }>1</button>
                    <button name="2" className="calc-button" onClick={ (e) => this.setNum(e, '2') }>2</button>
                    <button name="3" className="calc-button" onClick={ (e) => this.setNum(e, '3') }>3</button>
                    <button name="+" className="calc-button calc-button-op" >+</button>
                    
                </div>
                <div className="calc-row">
                    <button name="0" className="calc-button width-2" onClick={ (e) => this.setNum(e, '0') } >0</button>
                    <button name="." className="calc-button" >.</button>
                    <button name="=" className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator