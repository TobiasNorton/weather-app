import React, { Component } from 'react'
import axios from 'axios'

class Forecast extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: '',
      forecast: undefined
    }
  }

  getUserInput = event => {
    this.setState({
      userInput: event.target.value
    })
  }

  getForecast = event => {
    event.preventDefault()
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          this.state.userInput
        }&APPID=b2726d7825cf3b1588bfa9175ad211bf&units=imperial`
      )
      .then(response => {
        this.setState({
          forecast: response.data
        })
      })
  }

  showForecast = () => {
    if (this.state.forecast) {
      console.log(this.state.forecast)
      return (
        // Why is it displaying a different date than the time stamp website?
        <div>
          {this.state.forecast.list.map((listItem, index) => {
            return (
              <p key={index}>
                {new Date(listItem.dt * 1000).toLocaleDateString([], {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric'
                })}
              </p>
            )
          })}
        </div>
      )
    }
  }

  render() {
    return (
      <main>
        <div className="container">
          <form onSubmit={this.getForecast}>
            <p>Enter a city to get a 5-Day Forecast.</p>
            <div className="forecast">
              <input type="text" placeholder="City name or zip code" onChange={this.getUserInput} />
              <button type="submit" className="search-button">
                Submit
              </button>
            </div>
          </form>
        </div>
        {this.showForecast()}
      </main>
    )
  }
}

export default Forecast
