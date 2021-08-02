import { SET_TOKEN } from './actionTypes'

interface SetTokenAction {
  type: typeof SET_TOKEN
  payload: Token
}

export type TokenActionTypes = SetTokenAction

export interface SystemState {
  token: Token
}

export interface Token {
  name: string
  price: string
  price_BNB: string
  symbol: string
}
