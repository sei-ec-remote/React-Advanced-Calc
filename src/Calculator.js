
import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    constructor() {
        super()
        this.state = {
            num: "",
            equals: false
        }
    }  
    
    clickNum = (event) => {
        let id = event.target.id;
        console.log(id)
        // if (this.state.operator === "") {
        this.setState(prevState => {
            return {num: prevState.num + id}
        })
    //   } else {
    //       this.setState({
    //           num2: [...this.state.num2, id]
    //   })
    // }
}

    // operator = (event) => {
    //     if(event.target.value === 'x') {
    //         this.setState({
    //             operator: 'x'
    //         })
    //     }
    // }

    
    clickEquals = () => {   
        const string = this.state.num
        console.log(string)
        this.setState({
            num: eval(string),
            equals: true
        })
    }
    clearButton = () => {
        
        this.setState({
            num: ""
        })
    }

// Need four functions to create addition, 

// Addition
// Subtraction
// Multiplication
// Division


    render() {
console.log(this.state.num)
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.num}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" onClick={this.clearButton}>AC</button>
                        <button className="calc-button calc-button-top" id="+/-" >+/-</button>
                        <button className="calc-button calc-button-top" id="%" onClick = {this.clickNum}>%</button>
                        <button className="calc-button calc-button-op" id="/" onClick = {this.clickNum}>/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" id="7" onClick = {this.clickNum}>7</button>
                        <button className="calc-button" id="8" onClick = {this.clickNum}>8</button>
                        <button className="calc-button" id="9" onClick = {this.clickNum}>9</button>
                        <button className="calc-button calc-button-op" id="*" onClick = {this.clickNum}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" id="4" onClick = {this.clickNum}>4</button>
                        <button className="calc-button" id="5" onClick = {this.clickNum}>5</button>
                        <button className="calc-button" id="6" onClick = {this.clickNum}>6</button>
                        <button className="calc-button calc-button-op" id="-" onClick = {this.clickNum}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button" id="1" onClick = {this.clickNum}>1</button>
                        <button className="calc-button" id="2" onClick = {this.clickNum}>2</button>
                        <button className="calc-button" id="3" onClick = {this.clickNum}>3</button>
                        <button className="calc-button calc-button-op" id="+" onClick = {this.clickNum}>+</button>
                        
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2" onClick = {this.clickNum}>0</button>
                        <button className="calc-button" id="." onClick = {this.clickNum}>.</button>
                        <button className="calc-button calc-button-op" id="=" onClick={this.clickEquals}>=</button>
                    </div>
                    {console.log('this.state', this.state)}
                </div>
            </div>
        )
    }
}

export default Calculator