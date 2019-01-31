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
            <Link to="/current/">Current Weather</Link>
            <Link to="/5-day-forecast/">5-Day Forecast</Link>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
