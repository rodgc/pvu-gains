import { SET_PLANTS } from './actionTypes'

interface SetPlantsAction {
  type: typeof SET_PLANTS
  payload: PlantsResponse
}

export type PlantActionTypes = SetPlantsAction

export interface SystemState {
  plants: PlantsResponse
}

export interface PlantsResponse {
  status: number
  data: Plant[]
  total: number
}

export interface Plant {
  id: number
  tokenId: number
  ownerId: string
  plantTokenId: number
  timeSell: number
  startingPrice: number
  endingPrice: number
  duration: number
  status: string
  updatedAt: number
  iconUrl: string
  animUrl: Animation
  config: Config
}

interface Animation {
  atlas: string
  json: string
  png: string
}

interface Config {
  visual: Visual
  stats: Stats
  farm: Farm
}

interface Visual {
  unitName: string
}

interface Stats {
  type: string
  hp: number
  defPhysics: number
  defMagic: number
  damagePhysics: number
  damageMagic: number
  damagePure: number
  damageHpLoss: number
  damageHpRemove: number
}

interface Farm {
  le: number
  hours: number
}
