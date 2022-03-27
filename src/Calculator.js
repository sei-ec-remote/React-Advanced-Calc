import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    // const [answer, setAnswer] = useState("0")
    constructor(props) {
        super(props)
        this.state ={
            display: [0],
            firstNum: "",
            secondNum: "",
            operator: "",
            answer: "",
        }
    }

    // Function to clear/reset the calculator
    clearCalc = () => {
        this.setState({
            display: [0],
            firstNum: "",
            secondNum: "",
            operator: "",
            answer: "",
        })
    }

    // Function to check what's at the front of the display array and take action appropriately.
    checkArrays = () => {

        // Copies the current display state
        let currDisplay = this.state.display
        // Sets the first item in the display to a variable
        let displayFront = this.state.display.slice(0, 1)
        // console.log("displayFront:", displayFront)
        // Tests to see if the first item in the display is not a number (an operator symbol)
        if (isNaN(displayFront)) {
            // console.log("dF is NaN")
            // If yes, remove the first item in the array
            currDisplay = this.state.display.shift()
            // console.log("current display:", currDisplay)
            // Set the altered array to the display
            this.setState({
                display: currDisplay
            })
        } else {
            console.log("df is #")
        }
    }


    // Capture the assigned text value of the calculator number button clicked
    handleNumButton = (e) => {
        
        // console.log("Clicked number:", e.target.innerText)
        const clickedNum = e.target.innerText
        
        // // Add a conditional for if first array index is 0 and second isn't decimal to drop zero.
        // // Another - or modified conditional - to drop the operator.
        // Calls this function at every number button press to see what's at the front of the array and take action if needed.
        this.checkArrays()
        // Adds what's been clicked to the back of the display state array.
        this.setState({
            display: [...this.state.display, clickedNum]
        })
    }

    handleOpButton = (e) => {
        // console.log("Clicked operator:", e.target.innerText)
        const clickedOp = e.target.innerText
        const firstNum = this.state.display.join("")
        // console.log("firstNum:", firstNum)
        this.setState({
            operator: clickedOp,
            display: [clickedOp],
            firstNum: firstNum
        })
    }

    handleEquButton = (e) => {
        const secondNum = this.state.display.join("")
        // console.log("secondNum:", secondNum)
        this.setState({
            secondNum: secondNum
        })
    }

    render(){
    console.log("This is state:", this.state)
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button onClick={(this.clearCalc)} className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button onClick={(this.handleOpButton)} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button">7</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">8</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">9</button>
                    <button onClick={(this.handleOpButton)} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button">4</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">5</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">6</button>
                    <button onClick={(this.handleOpButton)} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button">1</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">2</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">3</button>
                    <button onClick={(this.handleOpButton)} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button onClick={(this.handleEquButton)} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}   
}

export default Calculator
