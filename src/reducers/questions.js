import { FETCH_QUESTIONS } from '../actions/questions'

export default function questions (state = [], action) {
  switch(action.type) {
    case FETCH_QUESTIONS :
      const normalizedQuestions = Object.keys(action.questions).map(idQuestion => action.questions[idQuestion])
      return normalizedQuestions
    default :
      return state
  }
}