import React, { Component } from 'react'

export default class Calculator extends Component {
    // Declare state variables
    constructor(props) {
        super(props)
        this.state = {
            numValueOne: 'emp',
            numValueTwo: 'emp',
            operator: "",
            evalNum: "",
            evalBool: false,
            decimalOne: false,
            decimalTwo: false
  
        }
    }
    //FUNCTION - sets the operator to state var (operator)
    setOperator = (e) => {
        //defines selected operator to variable
        const selectedOperator = e.target.textContent
        this.setState((prevState,props)=> {
            //prevents user from reselecting another operator once one is selected
            if (prevState.operator!=="") return
            else {
                return {
                    //assigns selected operator to state variable
                    operator: selectedOperator
                }
            }
        })
    }


    //FUNCTION - concats number selected from calc to state variables (numValueOne & numValueTwo)
        // also updates the display
    enterNum = (e) => {
        //defines selected number to a variable
        const selectedNum = e.target.textContent
        //assigns display div to variable
        const display = document.getElementById('display')
        this.setState((prevState,props) => {
            //allows numValueOne to still be updated
            if (prevState.operator==="") {
                //prevents user from entering 0 as first number
                if (+prevState.numValueOne===0&&+selectedNum===0) {
                    if(prevState.decimalOne) {
                        display.textContent=this.state.numValueOne+selectedNum
                        return {
                            //concats number selected to previous number
                            numValueOne: prevState.numValueOne+selectedNum
                        }
                    } else {return}
                } 
                else {
                    if (prevState.numValueOne==='emp') {
                        //updates the display with the selectedNum
                        display.textContent=selectedNum
                        return {numValueOne: selectedNum}
                    } else {
                        //updates the display with the selectedNum
                        display.textContent=this.state.numValueOne+selectedNum
                        return {
                            //concats number selected to previous number
                            numValueOne: prevState.numValueOne+selectedNum
                        }
                    }
                }
            }
            //switches to numValueTwo to be updated
            else {
                //prevents user from entering 0 twice
                if (prevState.evalBool) return 
                if (+prevState.numValueTwo===0&&+selectedNum===0) {
                    if(prevState.decimalOne) {
                        display.textContent=this.state.numValueOne+selectedNum
                        return {
                            //concats number selected to previous number
                            numValueOne: prevState.numValueOne+selectedNum
                        }
                    } else {return}
                } 
                
                else {
                    if (prevState.numValueTwo==='emp') {
                        //updates the display with the selectedNum
                        display.textContent=selectedNum
                        return {numValueTwo: selectedNum}
                    } else {
                        //updates the display with the selectedNum
                        display.textContent=this.state.numValueTwo+selectedNum
                        return {
                            //concats number selected to previous number
                            numValueTwo: prevState.numValueTwo+selectedNum
                        }
                    }
                }
            }

        })
    }

    //FUNCTION - evaluates the num1 & num2 with the operator selected & updates display
    eval = () => {
        if (this.state.numValueOne===""||this.state.numValueTwo===""||this.state.operator===""||this.state.evalBool) return 
        //assigns display div to variable
        const display = document.getElementById('display')
        this.setState((prevState,props) => {
            if (prevState.operator==="x") {
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne*(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)*parseInt(prevState.numValueTwo),
                    evalBool: true
                } 

            }
            else if (prevState.operator==="/") {
                if(+prevState.numValueTwo===0) {
                    display.textContent="Not a Number"
                    return {evalBool:true}
                }
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne/(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)/parseInt(prevState.numValueTwo),
                    evalBool: true
                }

            }
            else if (prevState.operator==="+") {
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne+(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)+parseInt(prevState.numValueTwo),
                    evalBool: true
                }

            }
            else {
                //updates the display with the evalNum
                display.textContent=+this.state.numValueOne-(+this.state.numValueTwo)
                return {
                    evalNum: parseInt(prevState.numValueOne)-parseInt(prevState.numValueTwo),
                    evalBool: true
                }
            }
        })
        display.textContent=this.state.evalNum
    }
    // FUNCTION - clears the calculator and resets all values
    clr = () => {
        //assigns display div to variable
        const display = document.getElementById('display')
        // resets variables and display
        display.textContent=0
        this.setState((prevState,props) => {
            return {
                numValueOne: 'emp',
                numValueTwo: 'emp',
                operator: "",
                evalNum: "",
                evalBool: false,
                decimalOne: false,
                decimalTwo: false
            }
        })
    }
    // FUNCTION - sets a decimal for either entry with conditonal checks
    setDecimal = () => {
        // assigns display div to variable
        const display = document.getElementById('display')
        this.setState((prevState,props)=> {
            // assigns the decimal as the start the of the number entry
            if (prevState.numValueOne==="emp"||prevState.numValueOne==="0") {
                // prevents decimal for being used twice
                if (prevState.decimalOne) return
                // sets display & state variable to initial decimal entry
                display.textContent="0."
                return {
                    decimalOne: true,
                    numValueOne: "0."
                }
            // checks if a decimal has been used for numValueOne
            } else if (!prevState.decimalOne&&prevState.operator==="") {
                //updates display and concats decimal to entry
                display.textContent=prevState.numValueOne+"."
                return {
                    decimalOne: true,
                    numValueOne: prevState.numValueOne+"."

                }
            }
            // assigns the decimal as the start the of the number entry
            else if (prevState.numValueTwo==="emp"||prevState.numValueTwo==="0") {
                // prevents decimal being used twice & updating second entry if still at first entry
                if (prevState.decimalTwo||prevState.operator==="") return
                // sets display & state variable to initial decimal entry
                display.textContent="0."
                return {
                    decimalTwo: true,
                    numValueTwo: "0."
                }
            // checks if a decimal has been used for numValueTwo
            } else if (!prevState.decimalTwo) {
                if(prevState.operator==='') return
                //updates display and concats decimal to entry
                display.textContent=prevState.numValueTwo+"."
                return {
                    decimalTwo: true,
                    numValueTwo: prevState.numValueTwo+"."

                }
            } else return
        })
    }
    
    // FUNCTION - switches the sign of the entry
    switchSign = () => {
        // assigns display div to variable
        const display = document.getElementById('display')
        this.setState((prevState,props)=> {
            //checks if at first entry and value doesn't equal "emp"
            if(prevState.operator===""&&prevState.numValueOne!=="emp") {
                //updates display & variable
                display.textContent=-1*parseInt(prevState.numValueOne)
                return {
                    numValueOne: -1*prevState.numValueOne
                }
            }
             //checks if at second entry and value doesn't equal "emp"
            else if (prevState.operator!==""&&prevState.numValueTwo!=="emp") {
                //updeates display & variable
                display.textContent=-1*parseInt(prevState.numValueTwo)
                return {
                    numValueTwo: -1*prevState.numValueTwo
                }
            }
        })
    }

    // FUNCTION - divides current value by 100
    convToPrecent = () => {
        const display = document.getElementById('display')
        this.setState((prevState,props)=> {
            //checks if at first entry and value doesn't equal "emp"
            if(prevState.operator===""&&prevState.numValueOne!=="emp") {
                //updates display & variable
                display.textContent=+(prevState.numValueOne)/100 // NOTE: parseInt will truncate integar value (caused issue when used)
                return {
                    numValueOne: prevState.numValueOne/100
                }
            }
             //checks if at second entry and value doesn't equal "emp"
            else if (prevState.operator!==""&&prevState.numValueTwo!=="emp") {
                //updeates display & variable
                display.textContent=+(prevState.numValueTwo)/100 // NOTE: parseInt will truncate integar value (caused issue when used)
                return {
                    numValueTwo: prevState.numValueTwo/100
                }
            }
        })
    }



render(){



    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div  className="answer-box"><span id='display' >0</span></div>
                <div className="calc-row">
                    <button onClick={this.clr} className="calc-button calc-button-top">AC</button>
                    <button onClick={this.switchSign} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.convToPrecent} className="calc-button calc-button-top">%</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">7</button>
                    <button onClick={this.enterNum} className="calc-button">8</button>
                    <button onClick={this.enterNum} className="calc-button">9</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">4</button>
                    <button onClick={this.enterNum} className="calc-button">5</button>
                    <button onClick={this.enterNum} className="calc-button">6</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button">1</button>
                    <button onClick={this.enterNum} className="calc-button">2</button>
                    <button onClick={this.enterNum} className="calc-button">3</button>
                    <button onClick={this.setOperator} className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.enterNum} className="calc-button width-2">0</button>
                    <button onClick={this.setDecimal} className="calc-button">.</button>
                    <button onClick={this.eval} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

