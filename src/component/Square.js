import React, { Component } from 'react'

export class Square extends Component {
    render() {
        return (
            <button 
        className={"square " + (this.props.finish ? "finish" : "")}
        onClick= {() => {
            return this.props.onClick()}}
        >{this.props.face ? this.props.value : "face down"}</button>
        )
    }
}

export default Square
