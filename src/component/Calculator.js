import React, { useState } from 'react'

const Calculator = (props) => {
    // Declare state variables
    // let state = {
    //     result: ' ',
    //     num1: ' ',
    //     num2: ' ',
    //     operator: ' '
    // }
    let [result, setResult] = useState('')
    let [num1, setNum1] = useState('')
    let [num2, setNum2] = useState('')
    let [operator, setOperator] = useState('')
    let [error, setError] = useState('')

    // this is for the onClick events for each button
    ////////////////////////////////////////////////

    // const handleInput = (e) => {
    //     if (e.target.value !== '0' || num1 !== '') {
    //         setNum1(num1 + e.target.value)
    //         // console.log('this was clicked', e.target.value)
    //     }
    // }

    // second number or current number
    const handleInput = (e) => {
        if (e.target.value !== '0' || num2 !== '') {
            setNum2(num2 + e.target.value)
        }
    }

    // decimal
    const decimal = () => {
        if (!num2) {
            setNum2('0.')
        }
        else if (num2.indexOf('.') === -1) {
            setNum2(num2 + '.')
        }
    }

    // plus/minus button
    const pm = () => {
        console.log('plus/minus')
    }

    const calculateOperations = (e) => {
        if (operator) {
            setError('Operator has already been set. Press clear to reset.')
        } else if (!num2 && e.target.value === '-') {
            setError('')
            setNum2(e.target.value)
        } else if (!num2) {
            setError('A numerical value must be set first')
        } else {
            setNum1(num2)
            setOperator(e.target.value)
            setError('')
            setNum2('')
        }
    }

    const calculate = (e) => {
        e.preventDefault()

    if(!num1 || !operator) {
      setError('Please enter a valid expression')
    }
    else if(!num2) {
      setError('Please select a second number')
    }
    else {
      //Ideal case
      let answer = ''

      if(!operator || operator === '+') {
        answer = (Number(num1) + Number(num2)).toString()
      }
      else if(operator === '-') {
        answer = (Number(num1) - Number(num2)).toString()
      }
      else if(operator === '*') {
        answer = (Number(num1) * Number(num2)).toString()
      }
      else if(operator === '/') {
        answer = (Number(num1) / Number(num2)).toString()
      }
      else if(operator === '%') {
        answer = (Number(num1) % Number(num2)).toString()
      }

      //Set the answer to display
      let newResult = answer.slice(0, 10)

      // Update state
      setResult(newResult)
      setError('')
    }
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

    // const calculateOperations = (e) => {
    //     e.preventDefault()

    //     if (isNaN(num1) || isNaN(num2)) {
    //             return {
    //                 result: 'User error: did not put in a number'
    //             }

    //     } else if (operator = '+') {
    //         result = num1 + num2
    //         console.log(num1, 'is first')
    //         console.log(num2, 'is second')
    //         console.log(result, 'result')
    //             return {
    //                 result
    //             }
    //     } else if (e.target.value= '-') {
    //         result = num1 - num2
    //             return {
    //                 result
    //             }
    //     }

    // }

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

    const handleClear = () => {
        setResult('0')
        setNum1('')
        setNum2('')
        setOperator('')
    }

    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={handleClear} name="C" value=" ">AC</button>
                    <button className="calc-button calc-button-top" onClick={pm} name="plusMinus" value="+/-">+/-</button>
                    <button className="calc-button calc-button-top" onClick={calculateOperations} name="%" value="%">%</button>
                    <button className="calc-button calc-button-op" onClick={calculateOperations} name="divide" value="/">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleInput} name="7" value="7">7</button>
                    <button className="calc-button" onClick={handleInput} name="8" value="8">8</button>
                    <button className="calc-button" onClick={handleInput} name="9" value="9">9</button>
                    <button className="calc-button calc-button-op" onClick={calculateOperations} name="times" value="*">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleInput} name="4" value="4">4</button>
                    <button className="calc-button" onClick={handleInput} name="5" value="5">5</button>
                    <button className="calc-button" onClick={handleInput} name="6" value="6">6</button>
                    <button className="calc-button calc-button-op" onClick={calculateOperations} name="minus" value="-">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={handleInput} name="1" value="1">1</button>
                    <button className="calc-button" onClick={handleInput} name="2" value="2">2</button>
                    <button className="calc-button" onClick={handleInput} name="3" value="3">3</button>
                    <button className="calc-button calc-button-op" onClick={calculateOperations} name="plus" value="+">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick={handleInput} name="0" value="0">0</button>
                    <button className="calc-button" onClick={decimal} name="." value="decimal">.</button>
                    <button className="calc-button calc-button-op" onClick={calculate} name="=" value="equal">=</button>
                </div>
            </div>
            <p className='error'>{error}</p>
        </div>
    )
}

export default Calculator