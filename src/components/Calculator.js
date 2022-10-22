import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
        nums:[],
        operator: '',
        current: '',
        prev:'',
        result:'',
        error:''

    }

     handleClear = (event) => {
        // this.setState(() => {
        //     return {               
        //     }
        // })
        console.log('clear buttom clicked')
        this.setState({
            nums:[],
            operator: '',
            current: '',
            prev:'',
            result:'',
            error:''    
        })
    }

    handleClick = (event) => {
        event.persist()
		if (event.target.innerText === '.' && this.state.current.includes('.')) {
			return this.setState({ error: 'Error' })
		}

		this.setState(prevState => {
			return {
				current: prevState.current + event.target.innerText,
				error: ''
			}
		})
	} 
    
    handleOperator = (e) => {
        this.setState({
            operator: e.target.innerText
        })
    }

    Calculate = () => {
        // try {
        //     this.setState({
        //         // eslint-disable-next-line
        //         result: (eval(this.state.result) || "" ) + ""
        //     })
        // } catch (e) {
        //     this.setState({
        //         result: "error"
        //     })

        // }
        let result 
        const current = parseFloat(this.state.current)
        const prev = parseFloat(this.state.prev)
        console.log('I hit here')
        switch (this.state.operator){
			case '+':
				result = prev + current
				break
                
			case '-':
				result = prev - current
				break

			case '*':
				result = prev * current
				break

			case '/':
				result = prev / current
				break
			
			default:
				return 
		}
        console.log('I made it this far')
		// this.setState({
		// 	result: result
        //     currentSum:`${result}`
		// })
	

        // setOperator = (e) => {
        //     this.setState({
        //         operator: e.target.value
        //     })
        // }
        this.setState({
			nums:[],
            operator: '',
            current: `${result}`,
            prev:'',
            result:'',
            error:''    
		})
    }

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    {/* <p>Values: </p> */}
                    <div className="answer-box">{this.state.error ? this.state.error : this.state.current}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" name='AC' onClick = {this.handleClear}>AC</button>
                        <button className="calc-button calc-button-top" name ='+/-' onClick={this.handleClick}>+/-</button>
                        <button className="calc-button calc-button-top"name ='%' onClick={this.handleClick}>%</button>
                        <button className="calc-button calc-button-op"name ='/' onClick={this.handleClick}>/</button>
                    </div>
                    <div className="calc-row" >
                        <button className="calc-button" name = '7' onClick={this.handleClick}>7</button>
                        <button className="calc-button" name = '8' onClick={this.handleClick}>8</button>
                        <button className="calc-button" name = '9' onClick={this.handleClick}>9</button>
                        <button className="calc-button calc-button-op" name ='x' onClick={this.handleClick}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"name ='4' onClick={this.handleClick}>4</button>
                        <button className="calc-button"name ='5' onClick={this.handleClick}>5</button>
                        <button className="calc-button"name ='6' onClick={this.handleClick}>6</button>
                        <button className="calc-button calc-button-op"name ='-' onClick={this.handleClick}>-</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"name ='1' onClick={this.handleClick}>1</button>
                        <button className="calc-button"name ='2' onClick={this.handleClick}>2</button>
                        <button className="calc-button"name ='3' onClick={this.handleClick}>3</button>
                        <button className="calc-button calc-button-op"name ='+' onClick = {this.handleOperator}>+</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button width-2"name ='0' onClick={this.handleClick}>0</button>
                        <button className="calc-button"name ='.' onClick={this.handleClick}>.</button>
                        <button className="calc-button calc-button-op"name ='=' onClick={this.Calculate}>=</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator