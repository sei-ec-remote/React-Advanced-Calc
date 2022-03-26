import React, { Component } from 'react'
import AnswerBox from './AnswerBox'
import ButtonPane from './ButtonPane'

export default class Calculator extends Component {

    // Declare state variables
    state = {
        display: 0
    }

    clearState() {
        this.setState({
            display: 0,
            operation: null;
        })
    }

    buttonSubmit = (name)=> {
        console.log("Hitting button submit for: ", name);
    };

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    < AnswerBox display={this.state.display}/>
                    < ButtonPane onclick={this.buttonSubmit} />
                </div>
            </div>
        )
    }
}