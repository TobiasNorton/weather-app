import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <main>
        <h1>Welcome to WeatherStuff</h1>
        <div className="home-prompt">
          <p>Let's get the weather. Would you like the current weather or a 5-day forecast?</p>
          <div>
            <Link to="/current/">
              <button className="home-option">Current Weather</button>
            </Link>
            <Link to="/5-day-forecast/">
              <button className="home-option">5-Day Forecast</button>
            </Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
