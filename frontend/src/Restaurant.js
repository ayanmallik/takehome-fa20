import React, { Component } from 'react'
import Counter from './Counter'

class App extends Component {

  
  render() {
    return (
      <div>
        {this.props.name}

        <Counter count={this.props.rating}/>
        <br></br>
      </div> 
    )
  }
}

export default App
