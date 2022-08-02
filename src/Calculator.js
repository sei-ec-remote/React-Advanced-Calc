import React, { useState } from 'react'

const Calculator = () => {

    // DON'T USE CONSOLE LOG INSIDE HERE to see State ValUES. IT WILL NOT BE SHOWING CORRECTLY,
        // UNTIL react evaulates it. Probably not where you think. Maybe use console.log to show where you are

    // Declare state variables

    // const [inputList, setInputList] = useState([])
    // const [computeList, setcomputeList] = useState([])

    let answer = ''

    const [lastNumber, setLastNumber] = useState('')
    const [curentNumber, setcurentNumber] = useState('')
    const [answerNumber, setAnswerNumber] = useState('')

    const [operator, setOperator] = useState('')


    // if button press is number
    const buttonIsNumber = (clickIndex) => {
        if(clickIndex){
            setcurentNumber(curentNumber + clickIndex)
        }

    }
    
    // if button press is non-number
    const buttonIsNotNumber = (clickIndex) => {
        // more for error handling
        if(clickIndex){
            setOperator(clickIndex)
            setLastNumber(curentNumber)
            setcurentNumber('')
        } else if ((lastNumber === "") && (curentNumber === "")){
            setcurentNumber('error')
        }
    }



    const computeIt = () => {

        if(operator === "+"){
            answer = Number(curentNumber) + Number(lastNumber)
        }
        else if (operator === "-"){
            answer = Number(curentNumber) - Number(lastNumber)

        } else if (operator === "/"){
            answer = Number(curentNumber) / Number(lastNumber)

        } else if (operator === "*"){
            answer = Number(curentNumber) * Number(lastNumber)

        } else if (operator === "") {
            setcurentNumber("error")
        }

        ( setcurentNumber(answer))

    }


    const handleClear = (e) => {
        setLastNumber('')
        setcurentNumber('')
        setOperator('')
    }
     

    // main flow control if number input or not
    const handleClick = (e) => {       

        const clickIndex = e.target.value
        console.log('clickIndex@@',clickIndex);

        let isItTF = Number.isInteger(parseInt(clickIndex))      

        if(isItTF){
            buttonIsNumber(clickIndex)
        } else {  
            buttonIsNotNumber(clickIndex)
        } 


        
            
            // if i hit a key
                // is it a number
                    // if yes 
                        // is there an operator
                            // if yes put compute num1 and num2
                        // if no operator

            // concat the number
            // make into int, 
            // if there an op, then its a 2nd numb, if not then
            // its a first number
    }
            

        // if(clickIndex === "="){
        //     console.log('=');
        // } else if (clickIndex === "AC"){
        //     setInputList([])
        // } else {
        //     setInputList(inputList => [...inputList, clickIndex])
        // }     
     




    return (

        <div className="container">


            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{curentNumber}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" value="AC" onClick={handleClear}>AC</button>
                    <button className="calc-button calc-button-top" value="±" onClick={handleClick}>+/-</button>
                    <button className="calc-button calc-button-top" value="%" onClick={handleClick}>%</button>
                    <button className="calc-button calc-button-op" value="/" onClick={handleClick}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="7" onClick={handleClick}>7</button>
                    <button className="calc-button" value="8" onClick={handleClick}>8</button>
                    <button className="calc-button" value="9" onClick={handleClick}>9</button>
                    <button className="calc-button calc-button-op" value="*" onClick={handleClick}>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="4" onClick={handleClick}>4</button>
                    <button className="calc-button" value="5" onClick={handleClick}>5</button>
                    <button className="calc-button" value="6" onClick={handleClick}>6</button>
                    <button className="calc-button calc-button-op" value="-" onClick={handleClick}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" value="1" onClick={handleClick}>1</button>
                    <button className="calc-button" value="2" onClick={handleClick}>2</button>
                    <button className="calc-button" value="3" onClick={handleClick}>3</button>
                    <button className="calc-button calc-button-op" value="+" onClick={handleClick}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" value="1" onClick={handleClick}>0</button>
                    <button className="calc-button" value="." onClick={handleClick}>.</button>
                    <button className="calc-button calc-button-op" value="=" onClick={computeIt}>=</button>
                </div>
            </div>
        </div>
    )

}

export default Calculator