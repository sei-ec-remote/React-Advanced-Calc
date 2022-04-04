import React, { Component } from 'react'
import EquationBox from './EquationBox'
import CurrentValue from './CurrentValue'


const operators = ['+', '-', '*', '/', '%']

class Calculator extends Component {
    // Declare state variables
    constructor(){
        super()

        this.state = {
            value : '',
            equation: ''
        }
        
    }

    addChar = (char) => {
        this.setState(prevState =>{
            return {equation : prevState.equation+char}
        })
    }

    clear = () =>{
        this.setState({
            equation: '',
            value : ''
        })
    }

    splitEquation = (equation) => {
        // empty array that will hold the equation with elements being either numbers or operators
        const equationSplitByOperator = [] 
        // empty placeholder to add chars to a number
        let tempNumber = '' 
         // split the array so we can iterate and run conditionals on each char
        const equationArray = equation.split('')
        equationArray.forEach((val, index, array) => {
            // if the char is an operator add the tempNumber and the operator to the equationSplitByOperator Array
            if (operators.includes(val)){
                let number = parseInt(tempNumber)
                equationSplitByOperator.push(number)
                equationSplitByOperator.push(val)
                tempNumber = [] // reset tempArray to accept the next number
            }
            //check to see if it is the end of the array to add the last number in the equation
            else if(index === array.length - 1){
                tempNumber += val
                let number = parseInt(tempNumber)
                equationSplitByOperator.push(number)
            }
            // if the char is not an operator or end of array add it to the temp number
            else {
                if(tempNumber.length === 0 && val === '0')
                {
                    alert('The first number cannot be a 0')
                }
                tempNumber += val
            }      
        });
        return equationSplitByOperator
    }

    calculate = (equation) => {   
        const equationSplitByOperator  = this.splitEquation(equation)  
        const value = eval(equationSplitByOperator.join(' '))
        this.setState({
            value: value
        })

    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <CurrentValue value = {this.state.value}/>
                <EquationBox equation = {this.state.equation}/>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.clear} >AC</button>
                    <button className="calc-button calc-button-top" >+/-</button>
                    <button className="calc-button calc-button-top" onClick={()=>this.addChar('%')}>%</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('/')}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.addChar(7)}>7</button>
                    <button className="calc-button" onClick={()=>this.addChar(8)}>8</button>
                    <button className="calc-button" onClick={()=>this.addChar(9)}>9</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('*')}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.addChar(4)}>4</button>
                    <button className="calc-button" onClick={()=>this.addChar(5)}>5</button>
                    <button className="calc-button" onClick={()=>this.addChar(6)}>6</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('-')}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>this.addChar(1)}>1</button>
                    <button className="calc-button" onClick={()=>this.addChar(2)}>2</button>
                    <button className="calc-button" onClick={()=>this.addChar(3)}>3</button>
                    <button className="calc-button calc-button-op" onClick={()=>this.addChar('+')}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={()=>this.addChar(0)}>0</button>
                    <button className="calc-button" onClick={()=>this.addChar('.')}>.</button>
                    <button className="calc-button calc-button-op" onClick={()=>{this.calculate(this.state.equation)}}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator