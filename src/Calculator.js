import React, { Component } from 'react'
// we want to import our children components

import Operators from './Operators'
// calculator is the parent component to Numbers and Operators
// holds the numbers in state and we can pass them as props
class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            num1: "",
            num2: "",
            total: "",
            operator: "",
            // Can use this state to send it as a prop for the AC button in order 
            // to clear the calculator
            // Create a function to send it as a prop for the operators component
            clearCalc: [0]
        }
    }
    
    
    // addtoValue = (e) =>{
    //     // want this function in order to target the numbers in the array
    //     // and send them to the value box when clicked
    //     const nums = e.target.innerText
    //     // we have the set the state of the calcNumbers
    //     // we want to have the new numbers join with the previous numbers
    //     this.setState({
    //         calcNumbers: [
    //             {calcNumbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]},
    //             ...this.state.calcNumbers
    //         ]
    //     })
        
    // }
    clickNum = (e) =>{
        console.log('this is number clicked', e.target.value)
        // this.setState ({
        //     num1: [...this.state.num1, e.target.value]
        // })
        // if the operator is blank stay on num 1
        // if operator is + - X  then go on to num2
        if (this.state.operator === "") {
            this.setState ({
                num1: [...this.state.num1, e.target.value]
            })
        } else {
            this.setState({
                num2: [...this.state.num2, e.target.value]
            })
        }
        console.log('this what is allNum', e.target.value)
    }
    opertFunc = (e) =>{
        this.setState({
            operator: e.target.value
        })
    }
    
    addNum = (e) => {
        // let sumNum = (this.state.num1 + this.state.num2)
        // this.setState ({
        //     total: sumNum
        // })
        this.setState = e.target.value
        console.log('this is the plus button', this.setState)
        if(this.state.operator === "+") {
           this.setState({
               total: this.state.num1 + this.state.num2
           })
        }
    }
    subtractNum = (e) => {
        let subNum = (this.state.num1 - this.state.num2)
        this.setState ({
            total: subNum
        })
        this.setState = e.target.value
        console.log('this is the minus button', this.setState)
    }
    multiplyNum = (e) => {
        let multNum = (this.state.num1 * this.state.num2)
        this.setState ({
            total: multNum
        })
        this.setState = e.target.value
        console.log('this is the multiply button', this.setState)
    }
    divideNum = (e) => {
        let divNum = (this.state.num1 / this.state.num2)
        this.setState ({
            total: divNum
        })
        this.setState = e.target.value
        console.log('this is divide button', this.setState)
    }
    moduloNum = (e) =>{
        let modNum = (this.state.num1 / 100)
        this.setState ({
            total: modNum
        })
        this.setState = e.target.value
        console.log('this is the modulo button', this.setState)
    }
    equalNum = (e) => {
        if (this.addNum === this.state.operator) {
            console.log('ADD WORKS!')
        }
    }
    // we will use this handler function to send as a prop
    // this will be for the AC button to clear the calculator
    clearTheCalculator = () =>{
        this.setState ({
            clearCalc: [0]
        })
    }
    
    render() {
        // map over the numbers and send them as a prop to the numbers component
        // const alltheNums = this.state.calcNumbers
        // console.log('this is the props', this.props.calcNumbers)
        // console.log('this is the state of calcNumbers', alltheNums)
        // these are my calcNumbers, now we have to send them as props 
        // for the Numbers component
        // this is the clearCalc to send as a prop to the Operators component
        console.log('this is what clearCalc is', this.state.clearCalc)

        // console.log('this is the target value', e.target.innerText)
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    {/* whenever any of these buttons are clicked
                    they should be showing in the answers box */}
                    <div className="answer-box"
                    // clear={this.clearTheCalculator}
                    >
                        {this.state.num1}
                        {this.state.num2}
                        {this.state.total}

                    </div>
                    <div className="calc-row">
                       <Operators 
                       clear={this.clearTheCalculator}/>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button onClick={this.moduloNum} value="%" className="calc-button calc-button-top">%</button>
                        <button onClick={this.divideNum} value="/" className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNum} value="7" className="calc-button">7</button>
                        <button onClick={this.clickNum} value="8" className="calc-button">8</button>
                        <button onClick={this.clickNum} value="9" className="calc-button">9</button>
                        <button onClick={this.multiplyNum} value="x" className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNum} value="4" className="calc-button">4</button>
                        <button onClick={this.clickNum} value="5" className="calc-button">5</button>
                        <button onClick={this.clickNum} value="6" className="calc-button">6</button>
                        <button onClick={this.subtractNum} value="-" className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNum} value="1" className="calc-button">1</button>
                        <button onClick={this.clickNum} value="2" className="calc-button">2</button>
                        <button onClick={this.clickNum} value="3" className="calc-button">3</button>
                        {/* erases addNum */}
                        <button onClick={this.opertFunc} value="+" className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNum} value="0" className="calc-button width-2">0</button>
                        <button className="calc-button">.</button>
                        <button className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator