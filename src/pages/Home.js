import React, {Component} from 'react'
import MyTab from '../components/MyTab'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions/questions'
import MyCard from '../components/MyCardQuestion'

const options = [
    {
    key: 'answered',
    name: 'Answered Questions'
    },
    {
    key: 'pending',
    name: 'Pending Questions'
    }
]

class Home extends Component {
    state = {
        activeTab: options[1].key
    }
    componentDidMount() {
        this.props.dispatch(fetchQuestions())
    }
    setActiveTab(key) {
        this.setState({activeTab: key})
    }
    goToQuestion(q) {
        console.log(q)
    }
    render() {
        const {activeTab} = this.state
        return (<div>
        <MyTab options ={options} active={activeTab} onChangeSelected={this.setActiveTab.bind(this)}>
        <div>{this.props[activeTab].map(question => (<MyCard key={question.id} question={question} onClickButton={this.goToQuestion}></MyCard>))}</div>
        </MyTab>
      </div>)
    }
}

function mapStateToProps ({  questions , authedUser, users}) {
    const usersQuestions = questions.map(question => {
        const {name, avatarURL,id} = users.find(({id}) => id === question.author)
        return { ...question, user: { name, avatarURL, id}}
    }).sort((a,b) => {
        if(a.timestamp > b.timestamp) return -1
        else return 1
    })
    const answered = []
    const pending = []
    usersQuestions.forEach(question => {
        if(question.optionOne.votes.some(vote => authedUser.id === vote) || question.optionTwo.votes.some(vote=> authedUser.id === vote)) answered.push(question)
        else pending.push(question)
    })
    return {
      answered,
      pending
    }
  }


export default connect(mapStateToProps)(Home)

