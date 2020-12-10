import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'
import MyButton from '../components/MyButton'
import MyInputSelect from '../components/MyInputSelect'

class Login extends Component {
    state = {
        selectedUser: ""
    }
  componentDidMount() {
        this.props.dispatch(fetchUsers())
  }
  onChangeSelect(value) {
    this.setState({selectedUser: value})
  }
  login() {
    this.props.dispatch(setAuthedUser(this.state.selectedUser))
    this.props.history.push('/home');

  }
  render() {
      const optionsUsers= this.props.users.map(({id, name}) => ({ value: id, name }))
      const {selectedUser} = this.state
    return (
      <div>
          <MyInputSelect options={optionsUsers} label="Users Login" titleInput="Choose User" onChangeValue={this.onChangeSelect.bind(this)} selected={selectedUser}/>
          <MyButton title="Login" disabled={!selectedUser} onClick={this.login.bind(this)}/>
      </div>
    )
  }
}

function mapStateToProps ({  users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Login)
