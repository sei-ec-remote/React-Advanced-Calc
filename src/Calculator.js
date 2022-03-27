// Import React
import React, {useState} from 'react';

// Calculator funactionality
function Calculator() {
  const [currentNum, setCurrentNum] = useState('0');
  const [currentOperator, setCurrentOperator] = useState('');
  const [firstNum, setFirstNum] = useState('');
  const [decimal, setDecimal] = useState('')

  // Function to read the number button clicked
  const numInput = (e) => {


    if(e.target.innerText === "."){
        setDecimal(1)
    }

    if(e.target.innerText === '.' && decimal === 1){
        return
    }


    if (currentNum === '0' && e.target.innerText === 0) {
      return;
    }
    if (currentNum === '0') {
      return setCurrentNum(currentNum.slice(1) + e.target.innerText);
    }
    setCurrentNum(currentNum + e.target.innerText);
  };

  // Function to read the operator button clicked and clear the first number selected from the screen
  const operator = (e) => {

    setCurrentOperator(e.target.innerText);
    if (currentNum) {
      setFirstNum(currentNum);
    }
    setCurrentNum('');
    setDecimal('')
  };


  // Function to clear the calculator screen and set the currentNum to 0
  const clear = (e) => {
    setCurrentNum('0');
    setCurrentOperator('');
    setFirstNum('');
  };

  // Function to change the sign of the number when the +/- button is clicked
  const posNeg = () => {
    if (parseInt(currentNum) === 0) {
      return;
    } else if (parseInt(currentNum) > 0) {
      setCurrentNum('-' + currentNum);
    } else {
      let newCurrent = currentNum.slice(1);
      setCurrentNum(newCurrent);
    }
  };

  // Function to return and display the result of the operation and reset the calculator screen
  const equals = (e) => {
      let result = ''

    if (currentOperator === 'x') {
      result = parseInt(firstNum) * parseInt(currentNum);
    } else if (currentOperator === '-') {
      result = parseInt(firstNum) - parseInt(currentNum);
    } else if (currentOperator === '/') {
      result = parseInt(firstNum) / parseInt(currentNum);
    } else if (currentOperator === '+') {
      result = parseInt(firstNum) + parseInt(currentNum);
    }
    setCurrentNum(result);
    setFirstNum('');
    setCurrentOperator('');
    setDecimal("")
  };

  // Create calculator and assign respective functions to onClick for the buttons
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <div className="answer-box" style={{fontSize:"50px", display:"flex", flexDirection:"column-reverse"}}>{currentNum}</div>
        <div className="calc-row">
          <button
            onClick={posNeg}
            className="calc-button calc-button-top"
          >
            +/-
          </button>
          <button onClick={clear} className="calc-button calc-button-top">
            AC
          </button>
          <button className="calc-button calc-button-top">%</button>
          <button
            onClick={operator}
            className="calc-button calc-button-op"
          >
            /
          </button>
        </div>
        <div className="calc-row">
          <button onClick={numInput} className="calc-button">
            7
          </button>
          <button onClick={numInput} className="calc-button">
            8
          </button>
          <button onClick={numInput} className="calc-button">
            9
          </button>
          <button
            onClick={operator}
            className="calc-button calc-button-op"
          >
            x
          </button>
        </div>
        <div className="calc-row">
          <button onClick={numInput} className="calc-button">
            4
          </button>
          <button onClick={numInput} className="calc-button">
            5
          </button>
          <button onClick={numInput} className="calc-button">
            6
          </button>
          <button
            onClick={operator}
            className="calc-button calc-button-op"
          >
            -
          </button>
        </div>
        <div className="calc-row">
          <button onClick={numInput} className="calc-button">
            1
          </button>
          <button onClick={numInput} className="calc-button">
            2
          </button>
          <button onClick={numInput} className="calc-button">
            3
          </button>
          <button
            onClick={operator}
            className="calc-button calc-button-op"
          >
            +
          </button>
        </div>
        <div className="calc-row">
          <button onClick={numInput} className="calc-button width-2">
            0
          </button>
          <button onClick={numInput} className="calc-button">
            .
          </button>
          <button onClick={equals} className="calc-button calc-button-op">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;