import { SET_TOKEN } from './actionTypes'
import { TokenActionTypes } from './types'

const initialState = {
  token: {},
}

export default (state = initialState, action: TokenActionTypes) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
