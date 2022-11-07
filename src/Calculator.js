import React, { Component } from 'react'

class Calculator extends Component {

state = {
    input: '',
    prev: '',
    operator: '',
    equal:'',
}
// handle clear

handleClear = () => {
    this.setState({
        input: '',
        prev: '',
        operator: '',
        equal:'',
    })
}
// number inputs

pressDown = (e) => {
    e.persist()
    if (e.target.innerText === '.' && this.state.input.includes('.')) {
        return this.setState({equal :'pressed'})
    }
    
    this.setState (prevState => {
    return {
        input: prevState.input + e.target.innerText,
        equal: ''
        
    }
    
})
}

handleOperator = (e) => {
    e.persist()
    if (this.state.input === '') {
        return this.setState({

        })
    }
if (this.state.prev !== '') {
    this.calculate()
}

this.setState(prevState => {
    return {
        operator: e.target.innerText,
        prev: prevState.input,
        input:'',
        equal: ''
    }
})
}

calculate = () => {
    let funcRunning
    const prev = parseFloat(this.state.prev)
    const input = parseFloat(this.state.input)
    if (isNaN(prev) || isNaN(input)) {
            return this.setState({})
    
}
switch  (this.state.operator) {
    case '+':
        funcRunning = prev + input
        break
    case '-':
        funcRunning = prev - input
        break
    case 'x':
        funcRunning = prev * input
        break
    case '/':
        funcRunning = prev / input
        break
    default:
        return
}


this.setState({
        input: `${funcRunning}`,
        prev: '',
        operator: '',
        equal:'',
})

}






render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">{this.state.equal ? this.state.equal : this.state.input}</div>
                <div className="calc-row">
                    <button onClick= {this.handleClear} className="calc-button calc-button-top">AC</button>

                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>/

                    </button>
                </div>
                <div className="calc-row">
                    <button onClick= {this.pressDown}className="calc-button">7
                    </button>
                    <button className="calc-button" onClick= {this.pressDown}>8</button>
                    <button className="calc-button" onClick= {this.pressDown}>9</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>x</button>
                    
                    
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick= {this.pressDown}>4</button>
                    <button className="calc-button" onClick= {this.pressDown}>5</button>
                    <button className="calc-button" onClick= {this.pressDown}>6</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button" onClick= {this.pressDown}>1</button>
                    <button className="calc-button" onClick= {this.pressDown}>2</button>
                    <button className="calc-button" onClick= {this.pressDown}>3</button>
                    <button className="calc-button calc-button-op" onClick={this.handleOperator}>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2" onClick= {this.pressDown}>0</button>
                    <button className="calc-button" onClick= {this.pressDown}>.</button>
                    <button className="calc-button calc-button-op" onClick={this.calculate}>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator