import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CurrentWeather from './CurrentWeather'
import Home from './Home'
import Forecast from './Forecast'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="nav-bar">
            <div className="nav-left">
              <Link to="/" className="logo">
                WeatherNStuff
              </Link>
            </div>
            <div className="nav-right">
              <Link to="/current" className="nav-item">
                Current Weather
              </Link>
              <Link to="/5-day-forecast" className="nav-item">
                5-Day Forecast
              </Link>
            </div>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/current/" component={CurrentWeather} />
          <Route path="/5-day-forecast/" component={Forecast} />
        </div>
      </Router>
    )
  }
}

export default App
