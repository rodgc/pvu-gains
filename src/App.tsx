import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { actionTypes } from './features/token'
import { Navbar } from './components/Navbar'
import { PlantsTable } from './components/plantsTable'
import { About } from './pages/About'
import { Lands } from './pages/Lands'
import { Groups } from './pages/Groups'
import { PlantsResetTable } from './components/plantsResetTable'
import { PlantsResetTimeTable } from './components/plantsResetTimeTable'

const App: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function getTokenPrice() {
      const response = await fetch(
        'https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794'
      )
      const token = await response.json()
      dispatch({ type: actionTypes.SET_TOKEN, payload: token.data })
    }
    getTokenPrice()
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Switch>
          <Route path="/" component={PlantsTable} exact />
          <Route path="/about" component={About} />
          <Route path="/groups" component={Groups} />
          <Route path="/lands" component={Lands} />
          <Route path="/owner/:ownerId" component={PlantsResetTable} />
          <Route path="/plants-reset" component={PlantsResetTimeTable} />
          <Route path="/plant-roi" component={PlantsTable} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
