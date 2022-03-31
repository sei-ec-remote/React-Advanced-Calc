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
    //set first number
    setNum = (e, num1) => {
        console.log('this is the clicked value:', e.target.value)
        if (this.state.operator === '') {
            this.setState({ 
            num1: [
            ...this.state.num1,
            parseInt(e.target.value)
            ]
        })
        } else if (this.state.operator !== '') {
            this.setState({
                num2: [
                ...this.state.num2,
                parseInt(e.target.value)    
                ]
            })
        }
        //now I need to be able to have num1, operator and num2 in their respective order...
      }
      //set second number
    // setNum = (e, num2) => {
    //     console.log('this is the clicked value:', e.target.value)
    //     this.setState({ 
    //         num2: [
    //             ...this.state.num2, 
    //             e.target.value]
    //     })
    //   }
    setOperator = (e, value) => {
        console.log('this is the clicked operator:', e.target.value)
        //this.setState({ 
            //operator: e.target.value})
        let clickOperator = e.target.value
        console.log('this.setState in operator function: ', this.setState({ clickOperator: e.target.value}))
        //setState within my conditionals
        if (this.state.operator === '') {
             this.setState({
                 operator: clickOperator 
        })} else {
            this.setState({ 
                operator: 'Error' })
        }
      } 
    setResult =  (e, result) => {
        //numbers are in an array... need to use parseInt in setNum and join them here
        //returning numbers with commas...
        //parseFloat
        let firstNum = parseFloat(this.state.num1.join(''))
        let secNum = parseFloat(this.state.num2.join('')) 
        if (this.state.operator === '+') {
            this.setState({
                result: firstNum + secNum
            })
            console.log('this is the result', result)
        }
        else if (this.state.operator === '-') {
            this.setState({
                result: firstNum - secNum
            })
        }
        else if (this.state.operator === 'x') {
            this.setState({
                result: firstNum * secNum
            })
        }
        else if (this.state.operator === '/') {
            this.setState({
                result: firstNum / secNum
            })
        }
        else if (this.state.operator === '%') {
            this.setState({
                result: firstNum
            })
        }
    } 

    //clear the calculator by setting the state back to how it began...  
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
                <p> 
                    {this.state.num1}
                    {this.state.operator}
                    {this.state.num2}
                </p>
                <div className="answer-box">
                    <p>
                    {this.state.result}
                    </p>
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
                    <button value="=" className="calc-button calc-button-op" onClick={ (e) => this.setResult(e, '=') }>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator