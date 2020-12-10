import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'

class App extends Component {

  render() {
    return (
      <Router>
          <div>
              <Route path='/' exact component={Login} />
          </div>
      </Router>
    )
  }
}



export default App

