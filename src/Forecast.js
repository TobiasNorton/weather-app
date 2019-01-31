import React, { Component } from 'react'

class Forecast extends Component {
  render() {
    return (
      <main>
        <div className="container">
          <form onSubmit={this.getCurrentWeather}>
            <p>Enter a city to get a 5-Day Forecast.</p>
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

export default Forecast
