import { getUsers } from '../utils/api'
export const FETCH_USERS = 'FETCH_USERS'



export const fetchUsers = () => async dispatch => {
  const users = await getUsers()
  dispatch({  
    type: FETCH_USERS,
    users
  });
};