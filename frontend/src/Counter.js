import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.count
    }
  }
  
  render() {
    return (
      <div>
        {this.state.count}
        
        <br>
        </br>
        
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
      </div>
    )
  }

  handleIncrement = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  }

  handleDecrement = () => {
    this.setState((prevState) => ({count: prevState.count - 1}));
  }
}



export default Counter
