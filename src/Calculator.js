import React, { Component } from 'react'
import AnswerBox from './AnswerBox'
import ButtonPane from './ButtonPane'

class Calculator extends Component {
    // Declare state variables

constructor(props) {
    super(props);
    this.state = {
        display: 0
    }
}

buttonSubmit = (btnType) => {
    
}

render(){
    return (
        <div className="container">
            <h1>React Calculator</h1>
            <div className="calc-container">
                <p>Values: </p>
                < AnswerBox display={this.state.display}/>
                < ButtonPane onclick={buttonSubmit} />
            </div>
        </div>
    )
}
}

export default Calculator