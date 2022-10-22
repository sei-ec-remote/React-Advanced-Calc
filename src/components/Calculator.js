import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        // name:[  
        //     1,2,3,4,5,6,7,8,9,0
        // ],
        operator: '',
        currentSum: '',
        prev:'',
        // result:'',
        error:''

    }

    handleClick = (event) => {
        event.persist()
		if (event.target.innerText === '.' && this.state.current.includes('.')) {
			return this.setState({ error: 'Double dec pressed. Select another' })
		}

		this.setState(prevState => {
			return {
				current: prevState.current + event.target.innerText,
				error: ''
			}
		})
	}    

    handleClear = (event) => {
        // this.setState(() => {
        //     return {               
        //     }
        // })
        this.setState({
            // name:[  
        //     1,2,3,4,5,6,7,8,9,0
        // ],
        operator: '',
        currentSum: '',
        prev:'',
        // result:'',
        error:''    
        })
    }

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                <div className="answer-box">TBD</div>
                <div className="calc-row">
                    <button className="calc-button calc-button-top" name='AC' onClick = {this.handleClear}>AC</button>
                    <button className="calc-button calc-button-top" name ='+/-'>+/-</button>
                    <button className="calc-button calc-button-top"name ='%'>%</button>
                    <button className="calc-button calc-button-op"name ='/'>/</button>
                </div>
                <div className="calc-row" >
                    <button className="calc-button" name = '7' onClick={this.handleClick}>7</button>
                    <button className="calc-button" name = '8' onClick={this.handleClick}>8</button>
                    <button className="calc-button" name = '9' onClick={this.handleClick}>9</button>
                    <button className="calc-button calc-button-op" name ='x'>x</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"name ='4' onClick={this.handleClick}>4</button>
                    <button className="calc-button"name ='5' onClick={this.handleClick}>5</button>
                    <button className="calc-button"name ='6' onClick={this.handleClick}>6</button>
                    <button className="calc-button calc-button-op"name ='-'>-</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button"name ='1' onClick={this.handleClick}>1</button>
                    <button className="calc-button"name ='2' onClick={this.handleClick}>2</button>
                    <button className="calc-button"name ='3' onClick={this.handleClick}>3</button>
                    <button className="calc-button calc-button-op"name ='+'>+</button>
                </div>
                <div className="calc-row">
                    <button className="calc-button width-2"name ='0' onClick={this.handleClick}>0</button>
                    <button className="calc-button"name ='.'>.</button>
                    <button className="calc-button calc-button-op"name ='='>=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator