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
            display: "",
            // Can use this state to send it as a prop for the AC button in order 
            // to clear the calculator
            // Create a function to send it as a prop for the operators component
            clearCalc: 0
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
        console.log('this is the state of num1', this.state.num1)
        console.log('this is the state of num2', this.state.num2)

    }
    opertFunc = (e) =>{
        this.setState({
            operator: e.target.value
        })
        
    }
    
    addNum = () => {
        // let sumNum = (this.state.num1 + this.state.num2)
        // this.setState ({
        //     total: sumNum
        // })
        // this.setState = e.target.value
        console.log('this is the plus button', this.setState)
           this.setState({
            num1: null,
            num2: null,
            operator: null,   
            total: parseInt(this.state.num1.join('')) + parseInt(this.state.num2.join(''))
           }) 
           console.log("this is the state of", this.state.num1)
           console.log("this is the state of", this.state.num2)
        }
    
    subtractNum = () => {
        // let subNum = (this.state.num1 - this.state.num2)
        this.setState ({
            num1: null,
            num2: null,
            operator: null, 
            total: parseInt(this.state.num1.join('')) - parseInt(this.state.num2.join(''))
        })
        // this.setState = e.target.value
        console.log('this is the minus button', this.setState)
    }
    multiplyNum = () => {
        // let multNum = (this.state.num1 * this.state.num2)
        this.setState ({
            num1: null,
            num2: null,
            operator: null, 
            total: parseInt(this.state.num1.join('')) * parseInt(this.state.num2.join(''))
        })
        // this.setState = e.target.value
        console.log('this is the multiply button', this.setState)
    }
    divideNum = () => {
        // let divNum = (this.state.num1 / this.state.num2)
        this.setState ({
            num1: null,
            num2: null,
            operator: null, 
            total: parseInt(this.state.num1.join('')) / parseInt(this.state.num2.join(''))
        })
        // this.setState = e.target.value
        console.log('this is divide button', this.setState)
    }
    moduloNum = () =>{
        // let modNum = (this.state.num1 / 100)
        this.setState ({
            num1: null,
            num2: null,
            operator: null, 
            total: parseInt(this.state.num1.join('')) / 100
        })
        // this.setState = e.target.value
        console.log('this is the modulo button', this.setState)
    }
    errorMessage = () => {
        this.setState ({
            num1: null,
            num2: null,
            operator: null, 
            total: this.state.display = console.error
        })
    }
    equalNum = () => {
        if (this.state.operator === "+") {
            this.addNum()
            // console.log('this is the setState', this.state.display)
        } else if (this.state.operator === "-") {
             this.subtractNum()
        } else if (this.state.operator === "x") {
            this.multiplyNum()
        } else if (this.state.operator === "/") {
            this.divideNum()
        } else if (this.state.operator === "%") {
            this.moduloNum()
        } else {
            return this.clearTheCalculator()
        }


    }
    // we will use this handler function to send as a prop
    // this will be for the AC button to clear the calculator
    clearTheCalculator = () =>{
        this.setState ({
           num1: "",
           num2: "",
           total: "",
           operator: "",
           clearCalc: ""
        })
        if (this.state.num1 === 0 && this.state.operator === "=") {
            
        }
    }
    
    render() {
        // map over the numbers and send them as a prop to the numbers component
        // const alltheNums = this.state.calcNumbers
        // console.log('this is the props', this.props.calcNumbers)
        // console.log('this is the state of calcNumbers', alltheNums)
        // these are my calcNumbers, now we have to send them as props 
        // for the Numbers component
        // this is the clearCalc to send as a prop to the Operators component
        // console.log('this is what clearCalc is', this.state.clearCalc)

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
                        {this.state.operator}
                        {this.state.num2}<br/>
                        {this.state.total}
                        {/* {this.state.display} */}

                    </div>
                    <div className="calc-row">
                       <Operators 
                       clear={this.clearTheCalculator}/>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button onClick={this.moduloNum} value="%" className="calc-button calc-button-top">%</button>
                        <button onClick={this.opertFunc} value="/" className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNum} value="7" className="calc-button">7</button>
                        <button onClick={this.clickNum} value="8" className="calc-button">8</button>
                        <button onClick={this.clickNum} value="9" className="calc-button">9</button>
                        <button onClick={this.opertFunc} value="x" className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.clickNum} value="4" className="calc-button">4</button>
                        <button onClick={this.clickNum} value="5" className="calc-button">5</button>
                        <button onClick={this.clickNum} value="6" className="calc-button">6</button>
                        <button onClick={this.opertFunc} value="-" className="calc-button calc-button-op">-</button>
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
                        <button onClick={this.equalNum} value="=" className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator