import { SET_PLANTS } from './actionTypes'
import { PlantActionTypes } from './types'

const initialState = {
  status: 0,
  data: [],
  total: 0,
}

export default (state = initialState, action: PlantActionTypes) => {
  switch (action.type) {
    case SET_PLANTS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
