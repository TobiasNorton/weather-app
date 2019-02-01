import React, { Component } from 'react'
import axios from 'axios'

class CurrentWeather extends Component {
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
      .then(response => {
        console.log(response.data)
      })
  }

  render() {
    return (
      <main>
        <div className="container">
          <form onSubmit={this.getCurrentWeather}>
            <p>Enter a city to get the current weather.</p>
            <div className="current-weather">
              <input type="text" placeholder="City name or zip code" onChange={this.getUserInput} />
              <button type="submit" onSubmit={this.getCurrentWeather} className="search-button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
    )
  }
}

export default CurrentWeather
