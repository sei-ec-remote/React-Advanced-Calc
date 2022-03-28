import React, { Component } from "react";

export default class Operators extends Component{
    render(){
        return(
            <>
             <button 
             className="calc-button calc-button-top"
             onClick={this.props.clear}
             >
                 AC
                 </button>
            </>
        )
    }
}