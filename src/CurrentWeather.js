import React, { Component } from 'react'

class CurrentWeather extends Component {
  render() {
    return (
      <main>
        <h1>Don't Fear the Weather</h1>
        <div className="container">
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
        </div>
      </main>
    )
  }
}

export default CurrentWeather
