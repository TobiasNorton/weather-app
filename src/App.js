import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
    }
  }

  getUserInput = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  getCurrentWeather = event => {
    event.preventDefault()
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          this.state.userInput
        }&APPID=b2726d7825cf3b1588bfa9175ad211bf&units=imperial`
      )
      .then(response => {})
  }

  render() {
    return (
      <div>
        <nav className="nav-bar">
          <div className="nav-left">
            <p className="logo">Logo, Dude</p>
          </div>
          <div className="nav-right">
            <a>Home</a>
            <a>Current Weather</a>
            <a>5-Day Forecast</a>
          </div>
        </nav>
        <main>
          <h1>Don't Fear the Weather</h1>

          <form onSubmit={this.getCurrentWeather}>
            <p>Enter a city to get the current weather.</p>
            <div className="current-weather">
              <input
                type="text"
                placeholder="Please enter city name or zip code"
                onChange={this.getUserInput}
              />
              <button type="submit" onSubmit={this.getCurrentWeather}>
                Submit
              </button>
            </div>
          </form>
        </main>
      </div>
    )
  }
}

export default App
