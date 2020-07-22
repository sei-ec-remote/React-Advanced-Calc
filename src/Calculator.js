import React, { useState } from 'react'

const Calculator = props => {
  // Declare state variables
  // operand for maths
  const [operand, setOperand] = useState(0);
  // check if equals has been clicked already
  const [alreaadyClicked, setalreadyClicked] = useState(false);
  // check if to start a new number to display
  const [updateDisplay, setUpdateDisplay] = useState(false);
  // currently selected math operation
  const [operation, setOperation] = useState(false);
  // value displayed on screen
  const [displayValue, setDisplayValue] = useState(0);

  // do math based on operation state
  function performOperation(op){
    // display will reset on next number click
    setUpdateDisplay(true);
    switch(op){
      case '/':
        if(!alreaadyClicked){
          // first press of equals button
          setalreadyClicked(true);
          let newDisplayValue = operand / displayValue;
          setOperand(displayValue);
          setDisplayValue(newDisplayValue);
        } else {
          // equals has already been pressed before
          setDisplayValue(displayValue / operand);
        }
        break;
      case 'x':
        setDisplayValue( operand * displayValue);
        break;
      case '-':
        if(!alreaadyClicked){
          // first press of equals button
          setalreadyClicked(true);
          let newDisplayValue = operand - displayValue;
          setOperand(displayValue);
          setDisplayValue(newDisplayValue);
        } else {
          // equals has already been pressed before
          setDisplayValue(displayValue - operand);
        }
        break;
      case '+':
        setDisplayValue( operand + displayValue);
        break;
      default:
        break;
    }
  }

  /*
  onClick funcitons:
  */

  function handleNumberClick(e){
    if(!updateDisplay){
      //concat diplayed value and parse to float
      let newDisplayValue = displayValue;
      newDisplayValue += e.target.innerText;
      newDisplayValue = parseFloat(newDisplayValue);
      setDisplayValue(newDisplayValue)
    } else { 
      // user clicked an operation
      // restart displayed number 
      setUpdateDisplay(false);
      let newDisplayValue = 0;
      newDisplayValue += e.target.innerText;
      newDisplayValue = parseFloat(newDisplayValue);
      setDisplayValue(newDisplayValue)
    }
  }

  function handleOperationClick(e){
    // update operand for later use
    setOperand(displayValue);
    // reset display
    setUpdateDisplay(true);
    // store for later evaluation
    setOperation(e.target.innerText);
  }

  function handlePercentageClick(e){
    // why does this button even exist on a calculator?
    let newDisplayValue = displayValue / 100;
    setDisplayValue(newDisplayValue);
  }

  function handleClearClick(e){
    // reset to init state 
    setDisplayValue(0);
    setOperation(false);
    setalreadyClicked(false);
  }

  function handleDecimalClick(e){
    // display value is left as a string here
    let newDisplayValue = displayValue;
    newDisplayValue += '.';
    setDisplayValue(newDisplayValue)
  }

  function handleNegetiveClick(e){
    // invert sign
    setDisplayValue(displayValue * -1.);
  }

  function handleEqualsClick(e){
    // perform math operation
    performOperation(operation);
  }

  return (
    <div className="container">
      <h1>React Calculator</h1>
      <div className="calc-container">
        <p>Values: </p>
        <div className="answer-box">{ displayValue }</div>
        <div className="calc-row">
          <button className="calc-button calc-button-top"
                  onClick={ (e) => handleClearClick(e) }
                  >
                  AC
                  </button>
          <button className="calc-button calc-button-top"
                  onClick={ (e) => handleNegetiveClick(e) }
                  >
                  +/-
                  </button>
          <button className="calc-button calc-button-top"
                  onClick={ (e) => handlePercentageClick(e) }
                  >
                  %
                  </button>
          <button className="calc-button calc-button-op"
                  onClick={ (e) => handleOperationClick(e) }
                  >
                  /
                  </button>
        </div>
        <div className="calc-row">
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  7
                  </button>
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  8
                  </button>
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  9
                  </button>
          <button className="calc-button calc-button-op"
                  onClick={ (e) => handleOperationClick(e) }
                  >
                  x
                  </button>
        </div>
        <div className="calc-row">
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  4
                  </button>
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  5
                  </button>
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  6
                  </button>
          <button className="calc-button calc-button-op"
                  onClick={ (e) => handleOperationClick(e) }
                  >
                  -
                  </button>
        </div>
        <div className="calc-row">
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  1
                  </button>
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  2
                  </button>
          <button className="calc-button"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  3
                  </button>
          <button className="calc-button calc-button-op"
                  onClick={ (e) => handleOperationClick(e) }
                  >
                  +
                  </button>
        </div>
        <div className="calc-row">
          <button className="calc-button width-2"
                  onClick={ (e) => handleNumberClick(e) }
                  >
                  0</button>
          <button className="calc-button"
                  onClick={ (e) => handleDecimalClick(e) }
                  >
                  .
                  </button>
          <button className="calc-button calc-button-op"
                  onClick={ (e) => handleEqualsClick(e) }
                  >
                  =
                  </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator