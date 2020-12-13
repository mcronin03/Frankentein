import React, { Component, useState } from "react"


<section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">Franke
          <h2>
            Question 1?
          </h2>
          <button onClick={()=>this.increment1()}>increment1</button>
          <button onClick={()=>this.increment1()}>increment1</button>
          <button onClick={()=>this.increment1()}>increment1</button>
          <button onClick={()=>this.increment1()}>increment1</button>
          <button onClick={()=>this.increment1()}>increment1</button>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    increment1() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    increment2() {
        this.setState({
            count: this.state.count + 2
        })
        console.log(this.state.count)
    }

    increment3() {
        this.setState({
            count: this.state.count + 3
        })
        console.log(this.state.count)
    }

    increment4() {
        this.setState({
            count: this.state.count + 4
        })
        console.log(this.state.count)
    }

    increment5() {
        this.setState({
            count: this.state.count + 5
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
                <button onClick={()=>this.increment1()}>Decrease</button>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment1()}>Increment</button>
                {//<input type="number" value={this.state.count} onChange={this.handleChange}></input>
                }
            </div>
        )
    }
}

export default Counter