import {FETCH_USERS} from '../actions/users'


export default function users (state = [], action) {
  switch(action.type) {
    case FETCH_USERS :
      const normalizedUsers = Object.keys(action.users).map(idUser => action.users[idUser])
      return normalizedUsers
    default :
      return state
  }
}