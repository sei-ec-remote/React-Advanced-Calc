import React, { Component } from 'react'

class Calculator extends Component {
    state = {
        onScreen: '---',
        expression: '',
        evaluated: false,
        operator: false

    }

    evaluate = () => {
        const expression = `${this.state.expression} ${this.state.onScreen}`
        try {
            const value = eval(expression)
            this.setState({
                onScreen: `${value}`,
                expression: `${value}`,
                
            })
        } catch (err) {
            const currentOnScreen = this.state.onScreen
            this.setState({
                onScreen: 'Invalid. Please clear to start over'
            })
            setTimeout(() => {
                this.setState({
                    onScreen: currentOnScreen
                })
            }, 1000)
        }
    }

    handleClick = (event) => {
        event.stopPropagation()
        let text = event.target.innerText
        switch (true) {
            case !isNaN(text):
                if (this.state.evaluated) {
                    console.log('1')
                    this.setState({
                        expression: '',
                        onScreen: text,
                        evaluated: false,
                    })
                    break
                }
                if ((this.state.operator || this.state.onScreen === '---') && text !== '0') {
                    console.log('2')
                    this.setState({
                        onScreen: text
                    })
                } else if ((this.state.onScreen !== '---') && !this.state.evaluated) {
                    console.log('3')
                    this.setState({
                        onScreen: `${this.state.onScreen}${text}`
                    })
                }
                break
            case ['+','-','x','/','%'].includes(text):
                if (text === 'x') {
                    text = '*'
                }
                if (!this.state.operator) {
                    this.setState((state) => {
                        return {
                            operator: true,
                            expression: `${state.onScreen} ${text}`
                        }
                    })
                } else {
                    this.evaluate()
                    this.setState({
                        expression: `${this.state.expression} ${text}`
                    })
                }

            
                break
            case text === '=':
                this.evaluate()
                this.setState({
                    operator: false,
                    evaluated: true
                })
                break
            case text === 'AC':
                this.setState({
                    onScreen: '---',
                    expression: '',
                    evaluated: false,
                    operator: false
                })
                break
            case text === '.':
                break
            case text === '+/-':
                if (!isNaN(this.state.onScreen)) {
                    this.setState({
                        onScreen: this.state.onScreen * -1
                    })
                }
                break
            default: 
                this.setState({
                    onScreen: 'you broke something. Press AC to start over'
                })
        }
        
    }

    addListeners = () => {
        const buttons = document.querySelectorAll('.calc-button')
        buttons.forEach((button) => {
            button.addEventListener('click', this.handleClick)
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
                
                <div className="answer-box">{this.state.onScreen}</div>
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