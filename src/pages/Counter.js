import React, { Component, useState } from "react"

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    decrease() {
        this.setState({
            count: this.state.count - 1
        })
        console.log(this.state.count)
    }


    handleChange(event) {
        this.setState({
            count: parseInt(event.target.value)
        });
    }


    render() {
        return (
            <div>
                <button onClick={()=>this.decrease()}>Decrease</button>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment()}>Increment</button>
                <input type="number" value={this.state.count} onChange={this.handleChange}></input>
            </div>
        )
    }
}

export default Counter