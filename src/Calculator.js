import React, { Component } from 'react'

class Calculator extends Component {
    //Declare state variables
    state = {
        num1: '',
        num2: '',
        operator: '',
        sum: ''
    }
    // number pressing function
    numKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let operator = this.state.operator

        // console.log('text', btnText)
        // console.log('color', btnColor)

        // if num1 is written and operator set, we write num2
        if(operator) {  
        this.setState({
            num2:this.state.num2 + btnText
            
        })
    } else {
        this.setState({
        num1:this.state.num1 + btnText
        })
        if(this.state.num1 &&this.state.sum && operator === '') {
            console.log('sum here ')
            this.setState({
                num1: this.state.num1
            })
        }
    }
    }
    //zero key function
    zeroKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let  num1 = this.state.num1
        let  num2 = this.state.num2
        let operator = this.state.operator
        //if statement to use 0 as normal btn if there is already a num 1-9 exist
        if(num1 && !num2 && !operator){
            this.setState({
                num1: this.state.num1 + btnText
            })
            // if we have a sum already and Not to modify it, but to use operator to apply next number
            if(this.state.num1 &&this.state.sum && operator === '') {
                console.log('sum here ')
                this.setState({
                    num1: this.state.num1
                })
            }
        }
        // same for num2 to use 0 as normal btn if there is already a num 1-9 exist
        if(num2){
            this.setState({
                num2: this.state.num2 + btnText
            })
        }
    }
    // .dot func to use 0 as first num, only for float nums
    dotKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let  num1 = this.state.num1
        let  num2 = this.state.num2
        let operator = this.state.operator
        // one dot per num, not to put multiple dots per number
        if(this.state.num1 &&this.state.sum && operator === '') {
            console.log('sum here ')
            this.setState({
                num1: this.state.num1
            })
        }
         // one dot per num, not to put multiple dots per number.  num2
        else if(num2 && num2 !== '0' && !num2.includes(btnText)) {
            this.setState({
                num2: this.state.num2 + btnText
            })
        }
        // to make float from 0 as <0.numbers>
        else if(!num2 && operator) {
            this.setState({
                num2: '0' +btnText
            })
        }
        // one dot per num, not to put multiple dots per number. num1
        else if(num1 && num1 !== '0' && !num1.includes(btnText) && !operator) {
            this.setState({
                num1: this.state.num1 + btnText
            })
        }
        // to make float from 0 as <0.numbers>
        else if (!num1 && !operator) {
            this.setState({
                num1: '0' + btnText
            })
        }
       
        
        

    }
    //operator keys function
    opKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let  num1 = this.state.num1
        if(!num1 || num1 == '0') {
            this.setState({
                operator: ''
            })
        } else {
            this.setState({
                operator: btnText
        })
    }
    }
    // sum  key function
    sumKeys = (e) => {
        const btnText = e.target.innerText
        const btnColor = e.target.style.backgroundColor
        let operator = this.state.operator
        let sum = this.state.sum
        let num1 = this.state.num1
        let num2 = this.state.num2
        console.log(btnText)
        console.log(btnColor)
        if(operator === '+') {
            this.setState({
                sum: parseFloat((Number(num1) + Number(num2)).toFixed(3)),
                num1: parseFloat((Number(num1) + Number(num2)).toFixed(3)),
                operator: '',
                num2: ''
            })
        } 
        if(operator === '-') {
            this.setState({
                sum: parseFloat((Number(num1) - Number(num2)).toFixed(3)),
                num1: parseFloat((Number(num1) - Number(num2)).toFixed(3)),
                operator: '',
                num2: ''
            })
        }
        if(operator === 'x') {
            this.setState({
                sum: parseFloat((Number(num1) * Number(num2)).toFixed(3)),
                num1: parseFloat((Number(num1) * Number(num2)).toFixed(3)),
                operator: '',
                num2: ''
            })
        }
        if(operator === '/') {
            this.setState({
                sum: parseFloat((Number(num1) / Number(num2)).toFixed(3)),
                num1: parseFloat((Number(num1) / Number(num2)).toFixed(3)),
                operator: '',
                num2: ''
            })
        }
    }

    // clear function AC
    clearKeys = () => {
        this.setState({
            num1: '',
            num2: '',
            operator: '',
            sum: ''
        })
     }
   

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>
                    Values: {this.state.num1}
                    {this.state.operator}
                    {this.state.num2}
                </p>
                <div className="answer-box">{this.state.sum}</div>
                <div className="calc-row">
                    <button onClick={this.clearKeys} id='AC' className="calc-button calc-button-top">AC</button>
                    <button onClick={this.btnKeys} className="calc-button calc-button-top">+/-</button>
                    <button onClick={this.btnKeys} className="calc-button calc-button-top">%</button>
                    <button onClick={this.opKeys} value="/" className="calc-button calc-button-op">/</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numKeys} className="calc-button">7</button>
                    <button onClick={this.numKeys} className="calc-button">8</button>
                    <button onClick={this.numKeys} className="calc-button">9</button>
                    <button onClick={this.opKeys} value="*" className="calc-button calc-button-op">x</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numKeys} className="calc-button">4</button>
                    <button onClick={this.numKeys} className="calc-button">5</button>
                    <button onClick={this.numKeys} className="calc-button">6</button>
                    <button onClick={this.opKeys} value="-" className="calc-button calc-button-op">-</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.numKeys} className="calc-button">1</button>
                    <button onClick={this.numKeys} className="calc-button">2</button>
                    <button onClick={this.numKeys} className="calc-button">3</button>
                    <button onClick={this.opKeys} value="+" className="calc-button calc-button-op">+</button>
                </div>
                <div className="calc-row">
                    <button onClick={this.zeroKeys} className="calc-button width-2">0</button>
                    <button onClick={this.dotKeys} className="calc-button">.</button>
                    <button onClick={this.sumKeys} className="calc-button calc-button-op">=</button>
                </div>
            </div>
        </div>
    )
}
}

export default Calculator