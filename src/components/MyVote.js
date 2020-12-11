import React, { useState } from 'react';
import MyButton from './MyButton'

const  MyCardQuestion = (({question, submitVote}) => {
    const [selected, setSelected] = useState(0)
    return(
        <div className="col s12 m7">
        <h2 className="header">Would You Rather:</h2>
            <div className="card horizontal">
              <div className="card-image" style={{maxHeight: '100px', maxWidth: '100px'}}>
                <img src={question.user.avatarURL} alt={question.user.name}/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                <form onSubmit={submitVote}>
                    <div className="row">  
                    <label>
                        <input name="vote" type="radio" value="optionOne" checked={selected === 'optionOne'} onChange={() => setSelected('optionOne')}/>
                        <span>{question.optionOne.text}</span>
                    </label>
                    <label>
                        <input name="vote" type="radio" value="optionTwo" checked={selected === 'optionTwo'} onChange={() => setSelected('optionTwo')}/>
                        <span>{question.optionTwo.text}</span>
                    </label>      
                </div>
                <div className="card-action">
                  <MyButton type="submit" title="Send Vote" disabled={!selected}/>
                </div>
                </form>
                </div>
              </div>
            </div>
        </div>)
})
export default MyCardQuestion