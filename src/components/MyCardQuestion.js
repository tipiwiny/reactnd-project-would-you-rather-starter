import MyButton from './MyButton'

const  MyCardQuestion = (({question, onClickButton}) => (
<div className="col s12 m7">
<h2 className="header">{`${question.user.name} said:`}</h2>
    <div className="card horizontal">
      <div className="card-image" style={{maxHeight: '100px', maxWidth: '100px'}}>
        <img src={question.user.avatarURL} alt={question.user.name}/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
            <span>What do you prefer : </span>
            <p>1 . {question.optionOne.text} ?</p>
            <p>2 . {question.optionTwo.text} ?</p>
        </div>
        <div className="card-action">
          <MyButton onClick={() => onClickButton(question)} title="Go to result"/>
        </div>
      </div>
    </div>
</div>))

export default MyCardQuestion