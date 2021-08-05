import React, { Component } from 'react'

export class Square extends Component {
    render() {
        return (
            <button 
        className="square"
        onClick= {() => {
            return this.props.onClick()}}
        >{this.props.face ? this.props.value : "face down"}</button>
        )
    }
}

export default Square
