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

    // // Function to display the number entered
    // handleDisplay = (num) => {
    //     this.setState({
    //         display: this.state.display + num
    //     })
    // }

    // Capture the assigned text value of the calculator number button clicked
    handleNumButton = (e) => {
        console.log("Clicked number:", e.target.innerText)
        const clickedNum = e.target.innerText
        this.setState({
            display: [...this.state.display, clickedNum]
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
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button">7</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">8</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button">4</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">5</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button">1</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">2</button>
                    <button onClick={(this.handleNumButton)} className="calc-button">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={(this.handleNumButton)} className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator