import React, {Component} from 'react';
import MyButton from '../components/MyButton';
import { connect } from 'react-redux'
import { addQuestion } from '../actions/questions';
class AddQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: ""
    }
    onSubmit(e) {
        e.preventDefault()
        const payload = { optionOneText: this.state.optionOne, optionTwoText: this.state.optionTwo, author : this.props.authedUser.id}
        this.props.dispatch(addQuestion(payload))
        this.props.history.push('/home');
    }
    handleOnChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        return (<div>
        <h1>Would You Rather</h1>
        <form onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field col s6">
            <input id="optionOne" placeholder="Option One" name="optionOne" type="text" className="validate" onChange={this.handleOnChange.bind(this)}/>
            </div>
            <div className="input-field col s6">
            <input id="optionTwo" placeholder="Option Two" name="optionTwo" type="text" className="validate" onChange={this.handleOnChange.bind(this)}/>
            </div>
            <MyButton title="Submit" type="submit" disabled={!(this.state.optionOne && this.state.optionTwo)}/>
        </form>
        </div>)
    }
}

function mapStateToProps ({  authedUser }) {
    return {
      authedUser
    }
  }
  

export default connect(mapStateToProps)(AddQuestion);