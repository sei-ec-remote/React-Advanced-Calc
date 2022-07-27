import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        calcDisplay: '',
        total: null,
        operator: null,
        newNum: true,
        message: 'error'
    
    }
    buttonClicked = e => {
        if(this.state.newNum) {
            this.setState({
                calcDisplay: e.target.innerText,
                newNum: false
            })
        } else {
            
            this.setState({
                calcDisplay: this.state.calcDisplay + e.target.innerText,
            })
        } 
         
        
    }
    // calcError = e => {

    // }
    setOperator = (e) => {
        if(this.state.calcDisplay && !this.state.total) {
            let newTotal = this.state.calcDisplay
            this.setState({
                operator: e.target.innerText,
                newNum: true,
                total: newTotal
            })
        } else if (this.state.calcDisplay && this.state.total) {
            let currTotal = this.operation()
            this.setState({
                total: currTotal,
                operator: e.target.innerText,
                calcDisplay: currTotal
            })
        }
    }

    

      equalSign = () => {
        if(this.state.total) {
            let result = this.operation()
            this.setState({
                calcDisplay: result,
                newNum: true,
                total: null
            })
        }
    }
    operation = () => {
       
        switch (this.state.operator) {
          case '+':
            return parseFloat(this.state.total) + parseFloat(this.state.calcDisplay)
          case '-':
            return parseFloat(this.state.total) - parseFloat(this.state.calcDisplay)
          case '*':
            return parseFloat(this.state.total) * parseFloat(this.state.calcDisplay)
          case '/':
            return parseFloat(this.state.total) / parseFloat(this.state.calcDisplay)
           
          default:
           return  (this.state.message)
        //     return parseFloat(this.)state.message)
       
        }
        
      }

    clearCalc = () =>{
        this.setState({
            total: null,
            operator: null,
            calcDisplay: '',
            newNum: true
        })
    }
render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values:{this.state.operator} </p>
                <div className="answer-box"> {this.state.calcDisplay} </div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top"onClick={this.clearCalc}>AC</button>
                    <button className="calc-button calc-button-top"onClick={this.setOperator}>+/-</button>
                    <button className="calc-button calc-button-top"onClick={this.setOperator}>%</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={ this.buttonClicked}>7</button>
                    <button className="calc-button"onClick={ this.buttonClicked}>8</button>
                    <button className="calc-button"onClick={ this.buttonClicked}>9</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={ this.buttonClicked}>4</button>
                    <button className="calc-button"onClick={ this.buttonClicked}>5</button>
                    <button className="calc-button"onClick={ this.buttonClicked}>6</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"onClick={ this.buttonClicked}>1</button>
                    <button className="calc-button"onClick={ this.buttonClicked}>2</button>
                    <button className="calc-button"onClick={ this.buttonClicked}>3</button>
                    <button className="calc-button calc-button-op"onClick={this.setOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"onClick={ this.buttonClicked}>0</button>
                    <button className="calc-button"onClick={this.setOperator}>.</button>
                    <button className="calc-button calc-button-op"onClick={this.equalSign}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator