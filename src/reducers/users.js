import {FETCH_USERS} from '../actions/users'


export default function goals (state = {}, action) {
  switch(action.type) {
    case FETCH_USERS :
      return {...state, ...action.users}
    default :
      return state
  }
}