import React from 'react';

const style = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '16px'
}
const MyQuestionResult = (({question, user}) => {
    const voteOptionsOne = question.optionOne.votes.length
    const voteOptionsTwo =  question.optionTwo.votes.length
    const total = voteOptionsOne + voteOptionsTwo
    const myElection = question.optionOne.votes.indexOf(user.id) !== -1? 'optionOne' : 'optionTwo'
    return (<div className="col s12 m7">
    <h2 className="header">{`${question.user.name} said:`}</h2>
        <div className="card horizontal">
          <div className="card-image" style={{maxHeight: '100px', maxWidth: '100px'}}>
            <img src={question.user.avatarURL} alt={question.user.name}/>
          </div>
          <div className="card-stacked">
            <div className="card-content">
                <span>Would You Rather: </span>
                <div  style={{...style, background: myElection === 'optionOne' ? 'green': ''}}>
                <p>{question.optionOne.text}</p>
                <span>{Math.round(voteOptionsOne/total *100)}%</span>
                <span> { `${voteOptionsOne} of ${total}`}</span>
                </div>
                <div style={{...style,background: myElection === 'optionTwo' ? 'green': ''}}>
                <p >{question.optionTwo.text}</p>
                <span>{Math.round(voteOptionsTwo/total* 100)}%</span>
                <span> { `${voteOptionsTwo} of ${total}`}</span>
                </div>
            </div>
          </div>
        </div>
    </div>)
})

export default MyQuestionResult