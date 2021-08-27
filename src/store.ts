import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import accessTokenReducer from './features/accessToken/accessTokenReducer'
import { PlantReducer } from './features/plant'
import { TokenReducer } from './features/token'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  plants: PlantReducer,
  token: TokenReducer,
  accessToken: accessTokenReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({})
)

export default store
