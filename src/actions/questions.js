import { getQuestions, getUsers, saveQuestion } from '../utils/api'
export const FETCH_QUESTIONS = 'FETCH_QUESTIONS'
export const GET_QUESTION = 'GET_QUESTION'

export const ADD_QUESTION = 'ADD_QUESTION'



export const fetchQuestions = () => async dispatch => {
  const questions = await getQuestions()
  dispatch({  
    type: FETCH_QUESTIONS,
    questions
  });
};

export const getQuestion = (idQuestion) => async dispatch => {
  const questions = await getQuestions()
  const question = questions[idQuestion]
  const users = await getUsers()
  const author = users[question.author]
  dispatch({  
    type: GET_QUESTION,
    question: {...question, user: author}
  });
};

export const addQuestion = (payload) => async dispatch => {
  await saveQuestion(payload)
  dispatch({  
    type: ADD_QUESTION,
  });
};