import { getUsers, saveQuestionAnswer } from '../utils/api'

export const FETCH_USERS = 'FETCH_USERS'
export const SAVE_VOTE = 'SAVE_VOTE'


export const fetchUsers = () => async dispatch => {
  const users = await getUsers()
  dispatch({  
    type: FETCH_USERS,
    users
  });
};
export const saveVote = (payload) => async dispatch => {
  await saveQuestionAnswer(payload)
  dispatch({  
    type: SAVE_VOTE
  });
};