import React, { Component, useState } from "react"

import Layout from '../components/Layout';

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


    /*
    <button onClick={()=>this.increment1()}>Decrease</button>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.increment1()}>Increment</button>
*/
    render() {
        return (
            <Layout fullMenu>
            <article id="main">
              <header>
                <h2>Generic Page</h2>
                <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
              </header>
              <section className="wrapper style5">
                <div className="inner">
                  <h3>Lorem ipsum dolor</h3>

                  <div className="col-4 col-12-small">
								<input checked={()=>this.increment1()} type="radio" id="demo-priority-low" name="demo-priority" />
								<label htmlFor="demo-priority-low">Low</label>
							</div>
							<div className="col-4 col-12-small">
								<input onClick={()=>this.increment2()} type="radio" id="demo-priority-normal" name="demo-priority" />
								<label htmlFor="demo-priority-normal">Normal</label>
							</div>
							<div className="col-4 col-12-small">
								<input value={()=>this.increment3()} type="radio" id="demo-priority-high" name="demo-priority" />
								<label htmlFor="demo-priority-high">High</label>
							</div>


                    <button onClick={()=>this.increment1()}>Decrease</button>
                        <div>Count - {this.state.count}</div>
                    <button onClick={() => this.increment1()}>Increment</button>
                  <p>
                    Morbi mattis mi consectetur tortor elementum, varius pellentesque
                    velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
                    scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
                    lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
                    Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
                    tempus sed finibus eget, fringilla quis risus. Maecenas et lorem
                    quis sem varius sagittis et a est. Maecenas iaculis iaculis sem.
                    Donec vel dolor at arcu tincidunt bibendum. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Fusce ut aliquet justo.
                    Donec id neque ipsum. Integer eget ultricies odio. Nam vel ex a orci
                    fringilla tincidunt. Aliquam eleifend ligula non velit accumsan
                    cursus. Etiam ut gravida sapien.
                  </p>
        
                  <p>
                    Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
                    amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor mollis
                    id vel diam. Praesent sit amet posuere risus, eu faucibus lectus.
                    Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta quam.
                    Proin nec dui cursus, posuere dui eget interdum. Fusce lectus magna,
                    sagittis at facilisis vitae, pellentesque at etiam. Quisque posuere
                    leo quis sem commodo, vel scelerisque nisi scelerisque. Suspendisse
                    id quam vel tortor tincidunt suscipit. Nullam auctor orci eu dolor
                    consectetur, interdum ullamcorper ante tincidunt. Mauris felis nec
                    felis elementum varius.
                  </p>
        
                  <hr />
        
                  <h4>Feugiat aliquam</h4>
                  <p>
                    Nam sapien ante, varius in pulvinar vitae, rhoncus id massa. Donec
                    varius ex in mauris ornare, eget euismod urna egestas. Etiam lacinia
                    tempor ipsum, sodales porttitor justo. Aliquam dolor quam, semper in
                    tortor eu, volutpat efficitur quam. Fusce nec fermentum nisl. Aenean
                    erat diam, tempus aliquet erat.
                  </p>
        
                  <p>
                    Etiam iaculis nulla ipsum, et pharetra libero rhoncus ut. Phasellus
                    rutrum cursus velit, eget condimentum nunc blandit vel. In at
                    pulvinar lectus. Morbi diam ante, vulputate et imperdiet eget,
                    fermentum non dolor. Ut eleifend sagittis tincidunt. Sed viverra
                    commodo mi, ac rhoncus justo. Duis neque ligula, elementum ut enim
                    vel, posuere finibus justo. Vivamus facilisis maximus nibh quis
                    pulvinar. Quisque hendrerit in ipsum id tellus facilisis fermentum.
                    Proin mauris dui, at vestibulum sit amet, auctor bibendum neque.
                  </p>
                </div>
              </section>
            </article>
          </Layout>
        )
    }
}

export default Counter