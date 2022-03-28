import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    constructor () {
        super ()
            this.state = {
                   num1: "",
                   operator: "",
                   num2: "",
                   result: ""
        }
        //log the state of the button values array
        console.log('this is the state', this.state)
    }
    setNum = (e, num1) => {
        console.log('this is the clicked value:', e.target.value)
        this.setState({ 
            num1: [
            ...this.state.num1,
            e.target.value
            ]
        });
      }
    setNum = (e, num2) => {
        console.log('this is the clicked value:', e.target.value)
        this.setState({ 
            num2: [
                ...this.state.num2, 
                e.target.value]
        })
      }
    setOperator = (e, value) => {
        console.log('this is the clicked operator:', e.target.value)
        this.setState({ [value]: e.target.value});
      } 
    //clear the calculator by setting the result equal to an empty array  
    setClear = (e) => {
        this.setState({
            num1: "",
            operator: "",
            num2: "",
            result: ""
        })
    }   
      
    //Each button will need an onClick to the e.target.value
    //need this.props => pass data from parent component to child component
render(){
    console.log(this.state)
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">
                    {this.state.num1}
                    {this.state.num2}
                    {this.state.result}
                    </div>
                <div className="calc-row">
                    <button value="AC" className="calc-button calc-button-top" onClick={ (e) => this.setClear(e, 'AC') } >AC</button>
                    <button value="+-" className="calc-button calc-button-top" onClick={ (e) => this.setOperator(e, '+-') }>+/-</button>
                    <button value="%" className="calc-button calc-button-top" onClick={ (e) => this.setOperator(e, '%') } >%</button>
                    <button value="/" className="calc-button calc-button-op" onClick={ (e) => this.setOperator(e, '/') } >/</button>
                </div>
                <div className="calc-row">
                    <button value="7" className="calc-button" onClick={ (e) => this.setNum(e, '7') } >7</button>
                    <button value="8" className="calc-button" onClick={ (e) => this.setNum(e, '8') } >8</button>
                    <button value="9" className="calc-button" onClick={ (e) => this.setNum(e, '9') } >9</button>
                    <button value="x" className="calc-button calc-button-op" onClick={ (e) => this.setOperator(e, 'x') }>x</button>
                </div>
                <div className="calc-row">
                    <button value="4" className="calc-button" onClick={ (e) => this.setNum(e, '4') }>4</button>
                    <button value="5" className="calc-button" onClick={ (e) => this.setNum(e, '5') } >5</button>
                    <button value="6" className="calc-button" onClick={ (e) => this.setNum(e, '6') } >6</button>
                    <button value="-" className="calc-button calc-button-op" onClick={ (e) => this.setOperator(e, '-') }>-</button>
                </div>
                <div className="calc-row">
                    <button value="1" className="calc-button" onClick={ (e) => this.setNum(e, '1') }>1</button>
                    <button value="2" className="calc-button" onClick={ (e) => this.setNum(e, '2') }>2</button>
                    <button value="3" className="calc-button" onClick={ (e) => this.setNum(e, '3') }>3</button>
                    <button value="+" className="calc-button calc-button-op" onClick={ (e) => this.setOperator(e, '+') }>+</button>
                    
                </div>
                <div className="calc-row">
                    <button value="0" className="calc-button width-2" onClick={ (e) => this.setNum(e, '0') } >0</button>
                    <button value="." className="calc-button" onClick={ (e) => this.setOperator(e, '.') } >.</button>
                    <button value="=" className="calc-button calc-button-op" onClick={ (e) => this.setOperator(e, '=') }>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator