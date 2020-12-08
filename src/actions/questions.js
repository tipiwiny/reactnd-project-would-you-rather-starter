import { getQuestions } from '../utils/api'
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'



export const fetchUsers = () => async dispatch => {
  const users = await getQuestions()
  dispatch({  
    type: FETCH_QUESTIONS,
    users
  });
};