import React, { Component } from 'react'

class CurrentWeather extends Component {
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
