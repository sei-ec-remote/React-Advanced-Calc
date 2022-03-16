import React, { Component } from 'react'

const Calculator = props => {
  // Declare state variables
  // operand for maths
  const [operand, setOperand] = useState(0);
  // true if equals button has been clicked already
  const [alreadyClicked, setAlreadyClicked] = useState(false);
  // set to true to restart displayValue concatenation
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
        if(!alreadyClicked){
          // first press of equals button
          setAlreadyClicked(true);
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
        if(!alreadyClicked){
          // first press of equals button
          setAlreadyClicked(true);
          let newDisplayValue = operand - displayValue;
          setOperand(displayValue);
          setDisplayValue(newDisplayValue);
        } else {
          // equals has already been pressed before
          setDisplayValue(displayValue - operand);
        }
        break;
      case '+':
        setDisplayValue(operand + displayValue);
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
      // check if user wants a decimal
      let newDisplayValue = displayValue === '0.' ? displayValue : 0;
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
    setAlreadyClicked(false);
  }

  function handleDecimalClick(e){
    // if decimal is clicked after operator button, display value should be 0.
    // TODO fix
    if(updateDisplay){
      setDisplayValue('0.');
    }
    // only add a decimal if there isn't one at the end already
    // TODO why does != throw a console warning but still work here?
    if(displayValue[displayValue.length - 1] !== '.'){
      // display value is left as a string here so it can concat with next number press
      let newDisplayValue = displayValue;
      newDisplayValue += '.';
      setDisplayValue(newDisplayValue)
    }
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
        {/* <p>Values: </p> */}
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
}

export default Calculator