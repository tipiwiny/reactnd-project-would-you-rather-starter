import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Question from './pages/Question'
import MyHeader from './components/MyHeader'
import { clearUser } from './actions/authedUser'
import PrivateRoute from './utils/PrivateRoute'

class App extends Component {
  logout() {
    this.props.dispatch(clearUser())
  }
  render() {
    return (
      <Router>
        <MyHeader authorized={!!this.props.authedUser.id} user={this.props.authedUser} onLogout={this.logout.bind(this)}/>
        <div style={{ padding: '20px'}}>
          <Route path='/' exact component={Login} />
          <PrivateRoute path='/home' exact component={Home} authed={!!this.props.authedUser.id} />
          <PrivateRoute  exact path='/questions/:question_id' component={Question} authed={!!this.props.authedUser.id}/>
        </div>
      </Router>
    )
  }
}

function mapStateToProps ({  authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)


