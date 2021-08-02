import React, { Fragment, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { PlantsTable } from '../components/plantsTable'
import { actionTypes } from '../features/token'

export const Home: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function getTokenPrice() {
      const response = await fetch(
        'https://api.pancakeswap.info/api/v2/tokens/0x31471e0791fcdbe82fbf4c44943255e923f1b794'
      )
      const token = await response.json()
      console.log('Token Home', token.data)
      dispatch({ type: actionTypes.SET_TOKEN, payload: token.data })
    }
    getTokenPrice()
  }, [])
  return (
    <Fragment>
      <PlantsTable />
    </Fragment>
  )
}
