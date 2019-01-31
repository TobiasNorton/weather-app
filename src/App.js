import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
  getCurrentWeather = event => {
    // event.preventDefault()
    console.log(event.target.value)
    // axios
    //   .get(
    //     `api.openweathermap.org/data/2.5/weather?q=${event.target.value}&APPID=b2726d7825cf3b1588bfa9175ad211bf&units=imperial`
    //   )
    //   .then(response => {
    //     console.log(response.data)
    //   })
  }

  render() {
    return (
      <div>
        <h1>Don't Fear the Weather</h1>

        <form onSubmit={this.getCurrentWeather}>
          <p>Enter a city to get the current weather.</p>
          <input type="text" placeholder="Please enter city name or zip code" name="city search" />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default App
