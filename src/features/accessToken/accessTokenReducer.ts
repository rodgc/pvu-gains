import { SET_PVU_TOKEN } from './actionTypes'
import { AccessTokenActionTypes } from './types'

const initialState = {
  pvuToken: 'test',
}

export default (state = initialState, action: AccessTokenActionTypes) => {
  switch (action.type) {
    case SET_PVU_TOKEN:
      return { ...state, pvuToken: action.payload }
    default:
      return state
  }
}
