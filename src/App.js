import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from './actions/users'
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }
  render() {
    console.log('dios',this.props.users)
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer" 
          >
            {JSON.stringify(this.props.users)}
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps ({ users, questions }) {
  console.log('Holita', users)
  return {
    users,
    questions
  }
}

export default connect(mapStateToProps)(App)

