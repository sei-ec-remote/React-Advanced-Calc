import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables

    constructor(props) {
        super (props)
        this.state = { 

            operator: "",
            num1: "",
            num2: "",
            clickCounter: 2
            
        }
    }

    setDisplay = (e) => {
        // if (this.state.num1 === "") {
            this.setState(prevState => ({num1: prevState.num1 + (e)}))
            console.log('what is this.state.num1', this.state.num1)
            console.log('what is state currently after addNum', this.state)
        // }
    }

    addNum = () => {
        this.setState(prevstate => ({ operator: "+"}));
        this.setState(prevstate => ({ num2: prevstate.num1}));
        this.setState(prevstate => ({ num1: ""}));
        console.log('what is state currently after addNum', this.state)
    }

    subNum = () => {
        this.setState(prevstate => ({ operator: "-"}));
        this.setState(prevstate => ({ num2: prevstate.num1}));
        this.setState(prevstate => ({ num1: ""}));
        console.log('what is state currently after addNum', this.state)
    }

    mulNum = () => {
        this.setState(prevstate => ({ operator: "x"}));
        this.setState(prevstate => ({ num2: prevstate.num1}));
        this.setState(prevstate => ({ num1: ""}));
        console.log('what is state currently after addNum', this.state)
    }

    divNum = () => {
        this.setState(prevstate => ({ operator: "/"}));
        this.setState(prevstate => ({ num2: prevstate.num1}));
        this.setState(prevstate => ({ num1: ""}));
        console.log('what is state currently after addNum', this.state)
    }

    allClear = () => {
        this.setState({
            operator: "",
            num1: "",
            num2: ""
        })
    }

    posNeg = () => {
        let counter = parseInt(this.state.clickCounter)

        if (counter % 2 === 0) {
            this.setState(prevstate => ({ num1: "-" + prevstate.num1}));
            this.setState(prevstate => ({ clickCounter: prevstate.clickCounter + 1}));
        } else {
            this.setState(prevstate => ({ num1: "+" + prevstate.num1}));
            this.setState(prevstate => ({ clickCounter: prevstate.clickCounter + 1}));
        }
    }

    percentBut = () => {
        let valNum1 = parseFloat(this.state.num1)

        this.setState({ num1: valNum1 / 100})

    }

    runMath = () => {

        let valNum1 = parseFloat(this.state.num1)
        let valNum2 = parseFloat(this.state.num2)
        if(this.state.operator === "+") {

            this.setState({ num1: valNum2 + valNum1})
        }
        else if(this.state.operator === "-") {

            this.setState({ num1: valNum2 - valNum1})
        }
        else if(this.state.operator === "x") {

            this.setState({ num1: valNum2 * valNum1})
        }
        else if(this.state.operator === "/") {

            this.setState({ num1: valNum2 / valNum1})
        }
    }
   

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.num1}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.allClear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.posNeg}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.percentBut}>%</button>
                    <button className="calc-button calc-button-op" onClick={this.divNum}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>{this.setDisplay(7)}} >7</button>
                    <button className="calc-button" onClick={()=>{this.setDisplay(8)}}>8</button>
                    <button className="calc-button" onClick={()=>{this.setDisplay(9)}}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.mulNum}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>{this.setDisplay(4)}}>4</button>
                    <button className="calc-button" onClick={()=>{this.setDisplay(5)}}>5</button>
                    <button className="calc-button" onClick={()=>{this.setDisplay(6)}}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.subNum}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={()=>{this.setDisplay(1)}}>1</button>
                    <button className="calc-button" onClick={()=>{this.setDisplay(2)}}>2</button>
                    <button className="calc-button" onClick={()=>{this.setDisplay(3)}}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.addNum}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={()=>{this.setDisplay(0)}}>0</button>
                    <button className="calc-button" onClick={()=>{this.setDisplay(".")}}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.runMath}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator