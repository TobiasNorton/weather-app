import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CurrentWeather from './CurrentWeather'
import Home from './Home'
import Forecast from './Forecast'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userInput: ''
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
      .then(response => {})
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="nav-bar">
            <div className="nav-left">
              <Link to="/" className="logo">
                Logo, Dude
              </Link>
            </div>
            <div className="nav-right">
              {/* <a>Home</a> */}
              <Link to="/current">Current Weather</Link>
              <Link to="/5-day-forecast">5-Day Forecast</Link>
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
