import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        current: "",
        prev: "",
        operator: "",
        error: ""
    }
    //handle clear function
    handleClear = () => {
        this.setState({
            current: "",
            prev: "",
            operator: "",
            error: ""
        })
    }


    //press the numbers and maybe decimals
    handlePress = (e) => {
        e.persist()
        if (e.target.innerText === "." && this.state.current.includes('.')) {
            return this.setState({ error: "Select another number, you pressed decimal twice!" })
        }
        this.setState(prevState => {
            return {
                current: prevState.current + e.target.innerText,
                error: ""
            }
        })
    }

    // handle operator/controller
    handleEqualSign = (e) => {
        e.persist()
        if (this.state.current === "") {
            return this.setState({ error: "Select a number, before you run an operation" })
        }
        if (this.state.prev !== "") {
            this.calculate()
        }
        this.setState(prevState => {
            return {
                operator: e.target.innerText,
                prev: prevState.current,
                current: "",
                error: ""
            }
        })
    }

    //calculate
    calculate = () => {
        let runningTotal
        const prev = parseFloat(this.state.prev)
        const current = parseFloat(this.state.current)
        if (isNaN(prev) || isNaN(current)) {
            return this.setState({ error: "Nothing to calculate" })
        }
        switch (this.state.operator) {
            case '+':
                runningTotal = prev + current
                break
            case '-':
                runningTotal = prev - current
                break
            case 'x':
                runningTotal = prev * current
                break
            case '/':
                runningTotal = prev / current
                break
            default:
                return
        }
        this.setState({
            current: `${runningTotal}`,
            prev: "",
            operator: "",
            error: ""
        })
    }

    render() {
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    <div className="answer-box">{this.state.error? this.state.error :this.state.current}</div>
                    <div className="calc-row">
                        <button onClick={this.handleClear} className="calc-button calc-button-top">AC</button>
                        <button className="calc-button calc-button-top">+/-</button>
                        <button className="calc-button calc-button-top">%</button>
                        <button onClick={this.handleEqualSign}  className="calc-button calc-button-op">/</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handlePress} className="calc-button">7</button>
                        <button onClick={this.handlePress} className="calc-button">8</button>
                        <button onClick={this.handlePress} className="calc-button">9</button>
                        <button onClick={this.handleEqualSign}  className="calc-button calc-button-op">x</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handlePress} className="calc-button">4</button>
                        <button onClick={this.handlePress} className="calc-button">5</button>
                        <button onClick={this.handlePress} className="calc-button">6</button>
                        <button onClick={this.handleEqualSign} className="calc-button calc-button-op">-</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handlePress} className="calc-button">1</button>
                        <button onClick={this.handlePress} className="calc-button">2</button>
                        <button onClick={this.handlePress} className="calc-button">3</button>
                        <button onClick={this.handleEqualSign} className="calc-button calc-button-op">+</button>
                    </div>
                    <div className="calc-row">
                        <button onClick={this.handlePress} className="calc-button width-2">0</button>
                        <button onClick={this.handlePress} className="calc-button">.</button>
                        <button onClick={this.calculate} className="calc-button calc-button-op">=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator