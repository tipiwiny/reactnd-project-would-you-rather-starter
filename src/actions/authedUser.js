export const SET_AUTHED_USER = 'SET_AUTHED_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function clearUser () {
  return {
    type: CLEAR_USER
  }
}