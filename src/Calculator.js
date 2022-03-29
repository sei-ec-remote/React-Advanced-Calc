import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    // const [answer, setAnswer] = useState("0")
    constructor(props) {
        super(props)
        this.state = {
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

    // onClick function for each of the four operator buttons.
    handleOpButton = (e) => {
        // console.log("Clicked operator:", e.target.innerText)
        // Captures the text on the operator button so we can perform the appropriate math later.
        const clickedOp = e.target.innerText
        // Takes all the items in the display and puts them together in a single string.
        const firstNum = this.state.display.join("")
        // console.log("firstNum:", firstNum)
        // Updates the states with the updated information. Display is explicitly told to continue being an array, else everything starts to freak out when we begin the second number.
        this.setState({
            operator: clickedOp,
            display: [clickedOp],
            firstNum: firstNum
        })
    }

    // The function called when the equals button is clicked.
    handleEquButton = (e) => {
        // As with firstNum, puts all the single digits/characters in the array together as one large number.
        const secondNum = this.state.display.join("")
        // Sets the state of secondNum. The display change to the = sign was an attempt to get secondNum to be available for the final function, but doesn't appear to be working (see doTheMath comment block).
        this.setState({
            secondNum: secondNum,
            display: "="
        })
        this.doTheMath()
    }

    // The function to perform the math from our gathered data.
    doTheMath = () => {
        const num1 = parseInt(this.state.firstNum)
        // Can't get secondNum to populate despite seeing it in state. Guessing it's something to do with the speed of everything? Or when the render updates? Nothing's changed until after this function has changed the display. Does it work when I have the display do something in handleEqButton?
        // No, doesn't appear to have made a difference. Note to self to ask about this. In the meantime, passing the display directly to num2 is working for functionality.
        // const num2 = parseInt(this.state.secondNum)
        const num2 = parseInt(this.state.display.join(""))
        let calcAnswer = null
        const calcOp = this.state.operator
        // Conditional for performing the math as indicated by the operator selected. Case might be better for this?
        if (calcOp === "+") {
            calcAnswer = num1 + num2
        } else if (calcOp === "-") {
            calcAnswer = num1 - num2
        } else if (calcOp === "x") {
            calcAnswer = num1 * num2
        } else if (calcOp === "/") {
            calcAnswer = num1 / num2
        } else {
            console.log("No clue, what is math?")
        }
        // Finally, puts the answer in the calculator display.
        // console.log("answer:", calcAnswer)
        this.setState({
            display: calcAnswer
        })
    }


    render(){
    // console.log("This is state:", this.state)
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



// TO-DO
//
// Next: perform the math selected
//
// Later: drop leading zero
//
// Bonus: Add decimal point