import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        onScreen: '0',
        expression: '',
        evaluated: ''

    }

    handleClick = (event) => {
        const text = event.target.innerText
        switch (true) {
            case !isNaN(text):
                console.log('number')
                break
            case ['+','-','x','/','%'].includes(text):
                console.log('operator')
                break
            case text === '=':
                console.log('eval')
                break
            case text === 'AC':
                console.log('clear')
                break
            case text === '.':
                console.log('decimal')
                break
            case text === '+/-':
                console.log('*-1')
                break
            default: 
                console.log('default')
        }
        
    }

    addListeners = () => {
        const buttons = document.querySelectorAll('.calc-button')
        buttons.forEach((button) => {
            document.addEventListener('click', this.handleClick)
        })
    }


    componentDidMount() {
        this.addListeners()
    }


render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top">AC</button>
                    <button className="calc-button calc-button-top">+/-</button>
                    <button className="calc-button calc-button-top">%</button>
                    <button className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">7</button>
                    <button className="calc-button">8</button>
                    <button className="calc-button">9</button>
                    <button className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">4</button>
                    <button className="calc-button">5</button>
                    <button className="calc-button">6</button>
                    <button className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button">1</button>
                    <button className="calc-button">2</button>
                    <button className="calc-button">3</button>
                    <button className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2">0</button>
                    <button className="calc-button">.</button>
                    <button className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator