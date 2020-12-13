import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/users'
import MyCardPosition from '../components/MyCardPosition'

class LeaderBoard extends Component {
    componentDidMount() {
        this.props.dispatch(fetchUsers())
    }
    render() {
        return (<div>
            {this.props.ranking.map ((user, key) =>(<MyCardPosition key={user.id} user={user} position={key + 1}/>))}
      </div>)
    }
}

function mapStateToProps ({ users}) {
    const ranking = users.map(user => ({...user, createdQuestions: user.questions.length, answeredQuestions: Object.keys(user.answers || {}).length, score: user.questions.length + Object.keys(user.answers || {}).length})).sort((a,b) => {
        if(a.score > b.score) return - 1
        else return 1
    })
    return {
        ranking,
    }
  }


export default connect(mapStateToProps)(LeaderBoard)

