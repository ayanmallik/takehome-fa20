import React, { Component } from 'react'
import Counter from './Counter'
import Instructions from './Instructions'
import Restaurant from './Restaurant'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      count: 0,
      inputValue: ""
    }
  }

  render() {
    return (
      <div className="App">
        <Counter count={this.state.count}/>
        <Instructions complete={true} />

        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
        <button type="button" onClick={this.addRestaurant}>Submit</button>

        <br></br>
        <br></br>

        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
      </div>
    )
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    })
  }

  addRestaurant = () => {
    this.setState((prevState) => ({
    restaurants: [...prevState.restaurants, 
    {id: prevState.restaurants.length + 1,
    name: prevState.inputValue,
    rating: 0}]}))
  }
}

export default App
