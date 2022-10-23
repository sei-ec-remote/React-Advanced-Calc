import React, { Component } from 'react'
// import Button from './Button'

class Calculator extends Component {
    // Declare state variables
    state = {
        '=': '='
    }

    // this is for the onClick event for each button
    handleChange = e => {
        const value = e.target.getAttribute('value')
        switch (value) {
          case 'clear':
            this.setState({
              operations: [],
            })
            break
          case 'equal':
            this.calculateOperations()
            break
          default:
            const newOperations = update(this.state.operations, {
              $push: [value],
            })
            this.setState({
              operations: newOperations,
            })
            break
        }
    }

    // handleChange = (event) => {
    //     // const value = this.props.event.value
    //     this.setState(() => {
    //         return {
            
    //         }
    //     })
        
    // }

    // handleChange = ({ className, value}) => {
    //     console.log('this is the className', className)
    //     return (
    //       {value}
    //     );
    //   };

    calculateOperations = () => {
        let result = this.state.operations.join('')
        if (result) {
          result = math.eval(result)
          result = math.format(result, { precision: 14 })
          result = String(result)
          this.setState({
            operations: [result],
          })
        }
      }

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box" placeholder="0">{this.state.result}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top"onClick={this.handleChange} name="C" value="clear">AC</button>
                        <button className="calc-button calc-button-top"onClick={this.handleChange} name="+/-" value="+/-">+/-</button>
                        <button className="calc-button calc-button-top"onClick={this.handleChange} name="%" value="%">%</button>
                        <button className="calc-button calc-button-op"onClick={this.handleChange} name="/" value="/">/</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"onClick={this.handleChange} name="7" value="7">7</button>
                        <button className="calc-button"onClick={this.handleChange} name="8" value="8">8</button>
                        <button className="calc-button"onClick={this.handleChange} name="9" value="9">9</button>
                        <button className="calc-button calc-button-op"onClick={this.handleChange} name="x" value="*">x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"onClick={this.handleChange} name="4" value="4">4</button>
                        <button className="calc-button"onClick={this.handleChange} name="5" value="5">5</button>
                        <button className="calc-button"onClick={this.handleChange} name="6" value="6">6</button>
                        <button className="calc-button calc-button-op"onClick={this.handleChange} label="-" value="-">-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"onClick={this.handleChange} name="1" value="1">1</button>
                        <button className="calc-button"onClick={this.handleChange} name="2" value="2">2</button>
                        <button className="calc-button"onClick={this.handleChange} name="3" value="3">3</button>
                        <button className="calc-button calc-button-op"onClick={this.handleChange} name="+" value="+">+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2"onClick={this.handleChange} label="0" value="0">0</button>
                        <button className="calc-button" onClick={this.handleChange} label="." value=".">.</button>
                        <button className="calc-button calc-button-op" onClick={this.calculateOperations} label="=" value="equal">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator