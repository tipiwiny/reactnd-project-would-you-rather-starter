import { FETCH_QUESTIONS,GET_QUESTION } from '../actions/questions'

export default function questions (state = { allQuestions: [], question: {}}, action) {
  switch(action.type) {
    case FETCH_QUESTIONS :
      const normalizedQuestions = Object.keys(action.questions).map(idQuestion => action.questions[idQuestion])
      return {...state, allQuestions: normalizedQuestions}
    case GET_QUESTION :
        return {...state, question: action.question}
    default :
      return state
  }
}