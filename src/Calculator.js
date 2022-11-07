import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        inputNum: '0',
        operatorType: null,
        reset: '0',
        total: '',
        storedNumber: ''
    }
   

   
    // reset = (e) => {
    //  console.log('button clicked')
    // }
    
    // inputNum = () => {
    //     if (
    //         this.inputNum == 
    //     ) {

    //     }
        
    // }

    // displayInput = () => {
    //     const display = document.getElementsByClassName('.answer-box')
    //     display.innerText = this.inputNum
    //     console.log(this.inputNum)
    // }
    

    // handleChange = () => {
    //     this.setState(() => {
    //         if (
                
    //         )
    //     })
    // }
    // Declare state variables

render(){
    
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box" onChange={this.displayInput}>0</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.reset}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.minusPlus}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.percentage}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorType}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.inputNum}>7</button>
                    <button className="calc-button" onClick={this.inputNum} >8</button>
                    <button className="calc-button" onClick={this.inputNum}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorType}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.inputNum}>4</button>
                    <button className="calc-button" onClick={this.inputNum}>5</button>
                    <button className="calc-button" onClick={this.inputNum}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorType}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={this.inputNum}>1</button>
                    <button className="calc-button" onClick={this.inputNum}>2</button>
                    <button className="calc-button" onClick={this.inputNum}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.operatorType}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.inputNum}>0</button>
                    <button className="calc-button" onClick={this.inputNum}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.equal}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator