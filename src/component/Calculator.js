import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        result: ' ',
        num1: ' ',
        num2: ' ',
        operator: ' '
    }

    // function component
    // let [result, setResult] = useState('')
    // let [num1, setNum1] = useState('')
    // let [num2, setNum2] = useState('')
    // let [operator, setOperator] = useState('')

    // this is for the onClick events for each button
    ////////////////////////////////////////////////

    // const handleInput = (e) => {
    //     if (e.target.value !== '0' || num1 !== '') {
    //         setNum1(num1 + e.target.value)
    //         // console.log('this was clicked', e.target.value)
    //     }
    // }

    // Function Component
    // handleInput = (e) => {
    //     if (e.target.value !== '0' || num1 !== '') {
    //         return {
    //             [e.target.name]: e.target.value
    //         }
    //     }
    // }

    // version 3
    handleInput = (e) => {
        this.setState(() => {
            return (
                e.target.value
            )
        })
    }

    // Operator Logic
    // const calculateOperations = (e) => {
    //     e.preventDefault()
        
    //     if (isNaN(num1) || isNaN(num2)) 
    //         return 
    //             switch (operator) {
    //             case '+':
    //                 // return (Number(num1) + Number(num2)).toString()
    //                 console.log('+')
    //                 break
    //             case '-':
    //                 // return (Number(num1) - Number(num2)).toString()
    //                 console.log('-')
    //                 break
    //             case '*':
    //                 // return (Number(num1) * Number(num2)).toString()
    //                 console.log('*')
    //                 break
    //             case '/':
    //                 // return (Number(num1) / Number(num2)).toString()
    //                 console.log('/')
    //                 break
    //             case '%':
    //                 console.log('%')
    //                 break
    //             default:
    //     }
    //   }

    calculateOperations = (e) => {
        const covertedNum1 = parseInt(this.state.num1)
        const covertedNum2 = parseInt(this.state.num2)

        if (isNaN(covertedNum1) || isNaN(covertedNum2)) {
            this.setState(() => {
                return {
                    result: 'User error: did not put in a number'
                }
            })

        } else if (e.target.value = '+') {
            const result = covertedNum1 + covertedNum2
            console.log(covertedNum1, 'is first')
            console.log(covertedNum2, 'is second')
            console.log(result, 'result')
                return {
                    result
                }
        } else if (e.target.value= '-') {
            const result = covertedNum1 - covertedNum2
                return {
                    result
                }
        }

    }

      // Equation equals
    //   const calculateOperations = () => {
    //        // the equation psedo-code
    //     // let answer = this.compute
    //     // setState(() => {
    //     //     return {
    //     //         result: this.compute
    //     //     }
    //     // })

    // }


    // psuedo code
    // handleInput = (e) => {
    //     let value1 = e.target.value
    //     let value2 = e.target.value
    //     let operator = e.target.value
    //     this.setState(() => {
    //         return {
    //             result: (value1, operator, value2)
    //             // set up if statements for different operators
    //         }
    //     })
        
    // }

    // calculateOperations = () => {
    //     this.setState({
    //         result: (eval(this.state.result) || "" ) + ""
    //     })
    // }



    // handleInput = e => {
    //     const value = e.target.getAttribute('value')
    //     switch (value) {
    //       case 'clear':
    //         this.setState({
    //           operations: [],
    //         })
    //         break
    //       case 'equal':
    //         this.calculateOperations()
    //         break
    //       default:
    //         const newOperations = update(this.state.operations, {
    //           $push: [value],
    //         })
    //         this.setState({
    //           operations: newOperations,
    //         })
    //         break
    //     }
    // }


    // calculateOperations = () => {
    //     let result = this.state.operations.join('')
    //     if (result) {
    //       result = math.eval(result)
    //       result = math.format(result, { precision: 14 })
    //       result = String(result)
    //       this.setState({
    //         operations: [result],
    //       })
    //     }
    //   }

    // handleClear = () => {
    //     setResult('0')
    //     setNum1('')
    //     setNum2('')
    //     setOperator('')
    // }

    render() {
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.result}</div>
                <button className="calc-button calc-button-top"onClick={this.handleInput} name="C" value="clear">AC</button>
                        <button className="calc-button calc-button-top"onClick={(e) => this.handleInput(e,'7')} name="+/-" value="+/-">+/-</button>
                        <button className="calc-button calc-button-top"onClick={(e) => this.handleInput(e,'%')} name="%" value="%">%</button>
                        <button className="calc-button calc-button-op"onClick={(e) => this.handleInput(e,'/')} name="/" value="/">/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"onClick={(e) => this.handleInput(e, 7)} name="7" value="7">7</button>
                        <button className="calc-button"onClick={(e) => this.handleInput(e, 8)} name="8" value="8">8</button>
                        <button className="calc-button"onClick={(e) => this.handleInput(e, 9)} name="9" value="9">9</button>
                        <button className="calc-button calc-button-op"onClick={(e) => this.handleInput(e,'')} name="x" value="*">x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"onClick={(e) => this.handleInput(e,'4')} name="4" value="4">4</button>
                        <button className="calc-button"onClick={(e) => this.handleInput(e,'5')} name="5" value="5">5</button>
                        <button className="calc-button"onClick={(e) => this.handleInput(e,'6')} name="6" value="6">6</button>
                        <button className="calc-button calc-button-op"onClick={(e) => this.handleInput(e,'')} label="-" value="-">-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"onClick={(e) => this.handleInput(e,'1')} name="1" value="1">1</button>
                        <button className="calc-button"onClick={(e) => this.handleInput(e,'2')} name="2" value="2">2</button>
                        <button className="calc-button"onClick={(e) => this.handleInput(e,'3')} name="3" value="3">3</button>
                        <button className="calc-button calc-button-op"onClick={(e) => this.handleInput(e,'+')} name="+" value="+">+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2"onClick={(e) => this.handleInput(e,'0')} label="0" value="0">0</button>
                        <button className="calc-button" onClick={(e) => this.handleInput(e,'.')} label="." value=".">.</button>
                        <button className="calc-button calc-button-op" onClick={(e) => this.handleInput(e,'=')} label="=" value="equal">=</button>
                </div>
            </div>
        )
    }
}

export default Calculator