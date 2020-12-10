import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import MyHeader from './components/MyHeader'
import { clearUser } from './actions/authedUser'

class App extends Component {
  logout() {
    this.props.dispatch(clearUser())
  }
  render() {
    return (
      <Router>
        <MyHeader authorized={this.props.authedUser} onLogout={this.logout.bind(this)}/>
        <div style={{ padding: '20px'}}>
          <Route path='/' exact component={Login} />
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({  authedUser }) {
  return {
    authedUser: !! authedUser
  }
}

export default connect(mapStateToProps)(App)


