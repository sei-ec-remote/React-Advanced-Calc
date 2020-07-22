import React, { useState } from 'react'

const Calculator = props => {
  // Declare state variables
  const [displayValue, setDisplayValue] = useState(0);

  console.log('state: displayValue', displayValue);

  function handleNumberClick(e){
    console.log(e.target.innerText);
  }

  function handleOperationClick(e){
    console.log(e.target.innerText);
  }

  function handlePercentageClick(e){
    console.log(e.target.innerText);
  }

  function handleClearClick(e){
    console.log(e.target.innerText);
  }

  function handleDecimalClick(e){
    console.log(e.target.innerText);
  }

  function handleNegetiveClick(e){
    console.log(e.target.innerText);
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
                  onClick={ (e) => handleOperationClick(e) }
                  >
                  =
                  </button>
        </div>
      </div>
    </div>
  )
}

export default Calculator