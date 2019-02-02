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
      let city = this.state.currentWeather
      let iconCode = city.weather[0].id
      return (
        <div className="weather-container">
          <p>
            {city.main.temp <= 40
              ? `It's pretty cold in ${city.name} right now.`
              : city.main.temp > 40 && city.main.temp <= 84
              ? ``
              : city.main.temp > 84
              ? `It's pretty hot in ${city.name} right now.`
              : ''}
          </p>
          <section className="weather-info">
            <div>
              <p>Current temperature: {city.main.temp} °F</p>
              <p>High: {city.main.temp_max} °F</p>
              <p>Low: {city.main.temp_min} °F</p>
              <p>Humidity: {city.main.humidity}%</p>
              <p>Wind: {city.wind.speed}mph</p>
            </div>
            {/* <i className={`owf owf-${803}`} /> */}
            <img src={`http://openweathermap.org/img/w/${iconCode}.png`} className="fit-icon" />
          </section>
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
