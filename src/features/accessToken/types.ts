import { SET_PVU_TOKEN } from './actionTypes'

interface SetPVUTokenAction {
  type: typeof SET_PVU_TOKEN
  payload: string
}

export type AccessTokenActionTypes = SetPVUTokenAction

export interface SystemState {
  accessToken: {
    pvuToken: string
  }
}
