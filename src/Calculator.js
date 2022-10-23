import React, { Component } from 'react'

///a package to deal with floating point calculation results like 0.52 + 0.06 = .580000000000001////
import "js-float-calculation"

class Calculator extends Component {
    
    state = {
        operator: "",
        currentValue: "0",
        display: "0",
        value1: ""
    }

    allClear = () => {
        this.setState({
            operator: "",
            currentValue: "0",
            display: 0,
            value1: ""          
        })
    }

    evaluate = () => {
        if (this.state.currentValue !== "") {
            let num1 = parseFloat(this.state.value1)
            let num2 = parseFloat(this.state.currentValue)
            let calculation
            switch (this.state.operator) {
            //////these operators come from js-float-calculation//////////
                case "+":
                    calculation = num1.add(num2)
                    break
                case "-":
                    calculation = num1.sub(num2)
                    break
                case "/":
                    calculation = num1.div(num2)
                    break
                case "*":
                    calculation = num1.mul(num2)
                    break
                default:
                    return   
            }
            this.setState({
                operator: "",
                currentValue: "",
                display: calculation,
                value1: ""             
            })            
        }
    }

    addToValue = (num) => {
        if (this.state.currentValue === "0" || this.state.currentValue === "") {
            this.setState({
                currentValue: num,
                display: num
            })
        } else {
            this.setState(prev => {
                return {
                    currentValue: prev.currentValue.concat(num),
                    display: prev.currentValue.concat(num)
                }
            }) 
        }        
    }

    pressNum = (num) => {
        if (this.state.currentValue.length <= 10) {
            this.addToValue(num)
        }
        
    }

    pressZero = () => {
        if (this.state.currentValue === "0") {
            return            
        } else {
            this.pressNum("0")
        }
    }

    toggleNegative = () => {
        if (this.state.display !== "0") {
            if (this.state.value1 === "") {
                this.setState(prev => {
                    return {
                        display: prev.display[0] === "-" ? prev.display.substring(1) : "-" + prev.display ,
                        value1: prev.display[0] === "-" ? prev.display.substring(1) : "-" + prev.display ,
                        currentValue: ""
                    }                
                })                
            } else {
                this.setState(prev => {
                    return {
                        display: prev.display[0] === "-" ? prev.display.substring(1) : "-" + prev.display ,
                        currentValue: prev.display[0] === "-" ? prev.display.substring(1) : "-" + prev.display
                    }                
                })   
            }

        }
    }

    percent = () => {
        if (this.state.currentValue !== "" && this.state.currentValue !== "0") {
            if (this.state.value1 === "") {
                this.setState(prev => {
                    return {
                        display: prev.display / 100,
                        value1: prev.display / 100,
                        currentValue: ""
                    }                
                }) 
            } else {
                this.setState(prev => {
                    return {
                        display: prev.display / 100,
                        currentValue: prev.display / 100
                    }                
                })  
            }
        }
    }

    setOp = (op) => {
        this.setState(prev => {
            return {
                operator: op,
                value1: prev.display,
                currentValue: ""
            }                
        })        
    }

    pressOp = (op) => {
        if (this.state.value1 === "") {
            this.setOp(op)
        } else if (this.state.currentValue === "" ) {
            this.setState({
                operator: op
            })
        } else {
            this.evaluate()
            this.setOp(op)
        }
    }

    pressPoint = () => {        
        if (!(this.state.currentValue.includes("."))) {
            if (this.state.currentValue === "") {
                this.setState(prev => {
                    return {
                        currentValue: "0.",
                        display: "0."
                    }
                }) 
            } else {
                this.setState(prev => {
                    return {
                        currentValue: prev.currentValue.concat("."),
                        display: prev.currentValue.concat(".")
                    }
                })                 
            }
        }
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                {/* <p>{this.state.currentValue}</p> */}
                <div className="answer-box">{this.state.display}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={this.allClear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={this.toggleNegative}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={this.percent}>%</button>
                    <button className={`calc-button calc-button-op ${this.state.operator === "/" ? "activeOp" : ""}`} onClick={() => {this.pressOp("/")}}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {this.pressNum("7")}}>7</button>
                    <button className="calc-button" onClick={() => {this.pressNum("8")}}>8</button>
                    <button className="calc-button" onClick={() => {this.pressNum("9")}}>9</button>
                    <button className={`calc-button calc-button-op ${this.state.operator === "*" ? "activeOp" : ""}`} onClick={() => {this.pressOp("*")}}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {this.pressNum("4")}}>4</button>
                    <button className="calc-button" onClick={() => {this.pressNum("5")}}>5</button>
                    <button className="calc-button" onClick={() => {this.pressNum("6")}}>6</button>
                    <button className={`calc-button calc-button-op ${this.state.operator === "-" ? "activeOp" : ""}`} onClick={() => {this.pressOp("-")}}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={() => {this.pressNum("1")}}>1</button>
                    <button className="calc-button" onClick={() => {this.pressNum("2")}}>2</button>
                    <button className="calc-button" onClick={() => {this.pressNum("3")}}>3</button>
                    <button className={`calc-button calc-button-op ${this.state.operator === "+" ? "activeOp" : ""}`} onClick={() => {this.pressOp("+")}}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={this.pressZero}>0</button>
                    <button className="calc-button" onClick={this.pressPoint}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.evaluate}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator