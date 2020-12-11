import React, {Component} from 'react'
import { connect } from 'react-redux'
import MyVote from '../components/MyVote'
import MyQuestionResult from '../components/MyQuestionResult'
import { getQuestion } from '../actions/questions'
import { saveVote } from '../actions/users'



class Question extends Component {
    componentDidMount() {
        const idQuestion = this.props.match.params.question_id
        this.props.dispatch(getQuestion(idQuestion))
    }
    submitVote(e) {
        e.preventDefault()
        const answer = e.target.vote.value
        const idQuestion = this.props.match.params.question_id
        const payload = {answer, qid: idQuestion, authedUser: this.props.authedUser.id}
        this.props.dispatch(saveVote(payload))
        this.props.dispatch(getQuestion(idQuestion))
     
    }
    render() {
        const {question, authedUser} =  this.props
        return (<div>
            {this.props.loading ? (this.props.answered ? <MyQuestionResult question={question} user={authedUser}/>: (<MyVote question={question} submitVote={this.submitVote.bind(this)}/>)): <div> Loading question </div> }
         </div>)
    }
}

function mapStateToProps ({  questions: {question}, authedUser}) {
    const answered = question.id ? question.optionOne.votes.some(user => user === authedUser.id) || question.optionTwo.votes.some(user => user === authedUser.id) : false
    return {
        question,
        authedUser,
        answered,
        loading: !!question.id
    }
  }


export default connect(mapStateToProps)(Question)

