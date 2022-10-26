import React, {useState} from 'react';

const Calculator = () => {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum (e) {
        let input = e.target.value
        if(num === 0){
            setNum(input);
        } else {
            setNum(num+input);
        }
    }
    function clear() {
        setNum(0);
    }
    function percentage (e) {
        setNum(num / 100);
    }
    function changeSign() {
        if(num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function operatorHandler(e) {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate() {
        if (operator === "/") {
            setNum(parseFloat(oldNum) / parseFloat(num));
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num));
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num));
        }else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num));
        }
    }

    // This will return the actual calculator as it looks on Macs
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: {this.state.num}</p>
                <div className="answer-box">{this.state.result}</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" onClick={clear}>AC</button>
                    <button className="calc-button calc-button-top" onClick={changeSign}>+/-</button>
                    <button className="calc-button calc-button-top" onClick={percentage}>%</button>
                    <button name="div" className="calc-button calc-button-op" onClick={operatorHandler} value={'/'}>/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick={inputNum} value={7}>7</button>
                    <button name='button8' className="calc-button" onClick={inputNum} value={8}>8</button>
                    <button name='button9' className="calc-button" onClick={inputNum} value={9}>9</button>
                    <button name="mult" className="calc-button calc-button-op" onClick={operatorHandler} value={'*'}>x</button>
                </div>
                <div className="calc-row">
                    <button name="4" onClick={inputNum} value={4} className="calc-button">4</button>
                    <button name='button5' className="calc-button" onClick={inputNum} value={5}>5</button>
                    <button name='button6' className="calc-button" onClick={inputNum} value={6}>6</button>
                    <button name="sub" onClick={operatorHandler} value={'-'}className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button name='button1' className="calc-button" onClick={inputNum} value={1}>1</button>
                    <button name='button2' className="calc-button" onClick={inputNum} value={2}>2</button>
                    <button name='button3' className="calc-button" onClick={inputNum} value={3}>3</button>
                    <button name="plus" className="calc-button calc-button-op" onClick={operatorHandler} value={'+'}>+</button>
                </div>
                <div className="calc-row">
                    <button name='0' className="calc-button width-2" onClick={inputNum} value={0}>0</button>
                    <button className="calc-button" onClick={inputNum} value={"."}>.</button>
                    <button name='equals' className="calc-button calc-button-op" onClick={calculate}>=</button>
                </div>
            </div>
        </div>
    )

    
}

export default Calculator