import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CurrentWeather from './CurrentWeather'
import Home from './Home'

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
              <p className="logo">Logo, Dude</p>
            </div>
            <div className="nav-right">
              {/* <a>Home</a> */}
              <a>Current Weather</a>
              <a>5-Day Forecast</a>
            </div>
          </nav>

          <Route exact path="/" component={Home} />
          <Route path="/:city" component={CurrentWeather} />
        </div>
      </Router>
    )
  }
}

export default App
