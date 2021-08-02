import { SystemState } from './types'

export const getPlants = (state: SystemState) => state.plants.data

export const getTotalPlants = (state: SystemState) => state.plants.total
