import React, {Component} from 'react';

export default class AnswerBox extends Component {

    render() {
        return(
            <div className="answer-box">
            {this.props.display}
            </div> 
        )
    }
}