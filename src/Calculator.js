import React, { Component } from 'react'
import AnswerBox from './AnswerBox'
import ButtonPane from './ButtonPane'
import calculate from "./calculate";

export default class Calculator extends Component {

    // Declare state variables
    state = {
        total: null,
        next: null,
        operation: null,
    }

    // Define how to clear the state from clear button
    clearState() {
        this.setState({
            total: null,
            next: null,
            operation: null,
        })
    }

    // Every button click will call into this function passing in a name
    //   of the button.   It then calls the actual routine that does all the
    //   work of the calculator based off of the state object and the button
    //   that was clicked.  The object returned from calculate will setState
    //   of the calculator.
    buttonSubmit = (name) => {
        console.log("Hitting button submit for: ", name);

        // console.log( calculate(this.state, name) );

        this.setState(calculate(this.state, name));
    };

    render(){
        return (
            <div className="container">
                <h1>React Calculator</h1>
                <div className="calc-container">
                    <p>Values: </p>
                    < AnswerBox display={this.state.next || this.state.total || "0"}/>
                    < ButtonPane onclick={this.buttonSubmit} />
                </div>
            </div>
        )
    }
}