import React from 'react';

const style = {
    margin: '10px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '16px'
}

const  MyCardPosition = (({user, position}) => (
<div className="col s12 m7">
<h2 className="header">{`${position}. ${user.name}`}</h2>
    <div className="card horizontal">
      <div className="card-image" style={{maxHeight: '100px', maxWidth: '100px'}}>
        <img src={user.avatarURL} alt={user.name}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
        <span className="card-title">Score: {user.score}</span>        
        <div  style={style}>
        <p>Answered Question: <span>{user.answeredQuestions}</span></p>
        </div>
        <div  style={style}>
        <p>Created Question: <span>{user.createdQuestions}</span></p>
        </div>
      </div>
    </div>
    </div>
</div>))

export default MyCardPosition