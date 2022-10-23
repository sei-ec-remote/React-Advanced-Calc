import React, { Component } from 'react'

class Calculator extends Component {
    // Declare state variables
    state = {
    //     // nums:[],
        operator: '',
        input: '',
        prev:'',
        result:'',
        error:''
    }

    // state = {
    //     num1: '',
    //     num2: '',
    //     result: ''
    // }

     handleClear = (event) => {
        // this.setState(() => {
        //     return {               
        //     }
        // })
        console.log('clear buttom clicked')
        this.setState({
            // nums:[],
            operator: '',
            input: '',
            prev:'',
            result:'',
            error:''    
        })
        // this.setState({
            // num1: '',
        //     num2: '',
        //     result: ''
        // })
    }

    handleClick = (event) => {
    //     this.setState(() => {
    //         return {
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // }
        event.persist()
		if (event.target.innerText === '.' && this.state.input.includes('.')) {
			return this.setState({ error: 'Error' })
		}

		this.setState(prevState => {
			return {
				input: prevState.input + event.target.innerText,
				error: ''
			}
		})
	} 
    
    handleOperator = (event) => {
        event.persist()
        // this.setState({
        //     operator: event.target.innerText
        // })
        if (this.state.input === '') {		
			return this.setState({
				error: 'No nums to do operations of select a num'
			})
		}
        if (this.state.prev !== '') {
			this.Calculate()
        }
        this.setState(prevState => {
            return {
                operator: event.target.innerText,
                input: '',
                prev: prevState.input,
                result:'',
                error:'' 
            }      
        })
    }

    Calculate = () => {
        // try 
        // {
        //     this.setState({
        //         result: (eval(this.state.result) || "" ) + ""
        //     })
        // } catch (e) {
        //     this.setState({
        //         result: "error"
        //     })

        // }
        let result 
        const input = parseFloat(this.state.input)
        const prev = parseFloat(this.state.prev)
        // const num1 = parseFloat(this.state.num1)
        // const num2 = parseFloat(this.state.num2)
        console.log('I hit here')
        // if (isNaN(prev) || isNaN(input)) {
        //     this.setState(() => {
        //         return {
        //             result: 'User error: did not put in a number'
        //         }
        //     })
        // } else {
        
        switch (this.state.operator){
			case '+':
				result = prev + input
                // result = num1 + num2
				break
                
			case '-':
				result = prev - input
                // result = num1 - num2
				break

			case '*':
				result = prev * input
                // result = num1 * num2
				break

			case '/':
				result = prev / input
                // result = num1 / num2
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
			// nums:[],
            operator: '',
            input: `${result}`,
            prev:'',
            result:'',
            error:''    
		})
        // this.setState({
        //     num1: '',
        //     num2: '',
        //     result: ''
        // })
        // }
    }
    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    {/* <p>Values: </p> */}
                    <div className="answer-box">{this.state.error ? this.state.error : this.state.input}</div>
                    <div className="calc-row">
                        <button className="calc-button calc-button-top" name='AC' onClick = {this.handleClear}>AC</button>
                        <button className="calc-button calc-button-top" name ='+/-' onClick={this.handleClick}>+/-</button>
                        <button className="calc-button calc-button-top"name ='%' onClick={this.handleClick}>%</button>
                        <button className="calc-button calc-button-op"name ='/' onClick={this.handleOperator}>/</button>
                    </div>
                    <div className="calc-row" >
                        <button className="calc-button" name = '7' onClick={this.handleClick}>7</button>
                        <button className="calc-button" name = '8' onClick={this.handleClick}>8</button>
                        <button className="calc-button" name = '9' onClick={this.handleClick}>9</button>
                        <button className="calc-button calc-button-op" name ='x' onClick={this.handleOperator}>x</button>
                    </div>
                    <div className="calc-row">
                        <button className="calc-button"name ='4' onClick={this.handleClick}>4</button>
                        <button className="calc-button"name ='5' onClick={this.handleClick}>5</button>
                        <button className="calc-button"name ='6' onClick={this.handleClick}>6</button>
                        <button className="calc-button calc-button-op"name ='-' onClick={this.handleOperator}>-</button>
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