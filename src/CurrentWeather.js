import React, { Component } from 'react'
import axios from 'axios'

class CurrentWeather extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      currentWeather: undefined
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
        this.setState(
          {
            currentWeather: response.data
          },
          () => console.log(this.state.currentWeather)
        )
      })
  }

  showCurrentWeather = () => {
    if (this.state.currentWeather) {
      console.log(this.state.currentWeather.name)
      return (
        <div className="container">
          <p>
            The weather in {this.state.currentWeather.name} is currently
            {/* {this.state.currentWeather.weather[0].description}. */}
          </p>
          <p />
        </div>
      )
    }
  }

  render() {
    return (
      <main>
        <div className="container">
          <form onSubmit={this.getCurrentWeather}>
            <p>Enter a city to get the current weather.</p>
            <div className="current-weather">
              <input type="text" placeholder="City name or zip code" onChange={this.getUserInput} />
              <button type="submit" className="search-button">
                Submit
              </button>
            </div>
          </form>
        </div>
        {this.showCurrentWeather()}
      </main>
    )
  }
}

export default CurrentWeather
