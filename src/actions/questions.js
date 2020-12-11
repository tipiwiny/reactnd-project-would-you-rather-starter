import { getQuestions } from '../utils/api'
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'



export const fetchQuestions = () => async dispatch => {
  const questions = await getQuestions()
  dispatch({  
    type: FETCH_QUESTIONS,
    questions
  });
};