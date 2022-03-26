import React, { Component } from 'react'

export default class CalculatorRow extends Component
{
    render()
    {
        const buttons = this.props.inputs.map( (input, index) => {
            if(['AC','+/-','%','/'].includes(input))
            {
                if(index !== this.props.inputs.length - 1)
                {
                    if(input === 'AC')
                    {
                        return <button className="calc-button calc-button-top" key={index} onClick={this.props.clear}>{input}</button>
                    }
                    else
                    {
                        return <button className="calc-button calc-button-top" key={index}>{input}</button>
                    }
                }
                else
                {
                    return <button className="calc-button calc-button-op" key={index} onClick={this.props.operationBtn}>{input}</button>
                }
            }    
            else if(['7','8','9','x'].includes(input))
            {
                if(index !== this.props.inputs.length - 1)
                {
                    return <button className="calc-button" key={index} onClick={this.props.numberBtn}>{input}</button>
                }
                else
                {
                    return <button className="calc-button calc-button-op" key={index} onClick={this.props.operationBtn}>{input}</button>
                }
            }
            else if(['4','5','6','-'].includes(input))
            {
                if(index !== this.props.inputs.length - 1)
                {
                    return <button className="calc-button" key={index} onClick={this.props.numberBtn}>{input}</button>
                }
                else
                {
                    return <button className="calc-button calc-button-op" key={index} onClick={this.props.operationBtn}>{input}</button>
                }
            }
            else if(['1','2','3','+'].includes(input))
            {
                if(index !== this.props.inputs.length - 1)
                {
                    return <button className="calc-button" key={index} onClick={this.props.numberBtn}>{input}</button>
                }
                else
                {
                    return <button className="calc-button calc-button-op" key={index} onClick={this.props.operationBtn}>{input}</button>
                }
            }
            else
            {
                if(input === '0')
                {
                    return <button className="calc-button width-2" key={index} onClick={this.props.numberBtn}>{input}</button>
                }
                else if(input === '.')
                {
                    return <button className="calc-button" key={index}>{input}</button>
                }
                else
                {
                    return <button className="calc-button calc-button-op" key={index}>{input}</button>
                }
            }
        })

        return(
            <div className="calc-row">
                {buttons}
            </div>
        )
    }
}