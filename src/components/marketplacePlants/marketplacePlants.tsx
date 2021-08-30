import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { actionTypes, selectors } from '../../features/plant'
import { selectors as tokenSelector } from '../../features/token'
import {
  selectors as accessTokenSelector,
  actionTypes as accessTokenActionTypes,
} from '../../features/accessToken'
import { RowItems } from './types'
import { useStyles } from './styles'
import { Plant } from '../../features/plant/types'

function createData({
  plantID,
  type,
  le,
  hour,
  cost,
  costUSD,
  leHour,
  leDay,
  leMonth,
  time,
}: RowItems) {
  return {
    plantID,
    type,
    le,
    hour,
    cost,
    costUSD,
    leHour,
    leDay,
    leMonth,
    time,
  }
}

function sortByTime(a: Plant, b: Plant) {
  const aTime =
    ((a.config.farm.le / a.config.farm.hours) * 24 * 30) / a.startingPrice
  const bTime =
    ((b.config.farm.le / b.config.farm.hours) * 24 * 30) / b.startingPrice
  return aTime > bTime ? -1 : 1
}

const MarketplacePlants: React.FC = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  // const [authorization, setAuthorization] = React.useState('')
  const plants = useSelector(selectors.getPlants)
  const totalPlants = useSelector(selectors.getTotalPlants)
  const token = useSelector(tokenSelector.getToken)
  const pvuToken = useSelector(accessTokenSelector.getPVUToken)
  const rows: RowItems[] = []

  const setPVUToken = () => {
    const newToken = window.prompt('Token', '')
    if (newToken) {
      window.localStorage.setItem('pvuToken', newToken)
      dispatch({
        type: accessTokenActionTypes.SET_PVU_TOKEN,
        payload: newToken,
      })
    }
  }

  const getPlants = async () => {
    const resp = await fetch(
      'https://backend-farm.plantvsundead.com/get-plants-filter-v2?offset=0&limit=1000&type=1',
      {
        headers: {
          Authorization: pvuToken || '',
        },
      }
    )

    const result = await resp.json()
    if (result.data.length > 0) {
      dispatch({
        type: actionTypes.SET_PLANTS,
        payload: result,
      })
    }

    console.log(result.status)

    if (result.status === 1) {
      localStorage.removeItem('pvuToken')
      setPVUToken()
    }
  }

  React.useEffect(() => {
    const pvuStorage = localStorage.getItem('pvuToken')

    if (!pvuStorage) {
      setPVUToken()
    }
  }, [])

  React.useEffect(() => {
    getPlants()
  }, [pvuToken])

  plants.sort(sortByTime).forEach((plant) => {
    const leHour = plant.config.farm.le / plant.config.farm.hours
    const leDay = leHour * 24
    const leMonth = leDay * 30
    const time = leMonth / plant.startingPrice
    rows.push(
      createData({
        plantID: plant.id,
        type: plant.config.stats.type,
        le: plant.config.farm.le,
        hour: plant.config.farm.hours,
        cost: plant.startingPrice,
        costUSD: plant.startingPrice * Number(token.price),
        leHour,
        leDay,
        leMonth,
        time,
      })
    )
  })

  return (
    <>
      <br />
      <Typography variant="h4">Total Plants: {totalPlants}</Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Plant ID</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">LE</TableCell>
              <TableCell align="right">Hour</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Cost (USD)</TableCell>
              <TableCell align="right">LE x Hour</TableCell>
              <TableCell align="right">LE x Day</TableCell>
              <TableCell align="right">LE x Month</TableCell>
              <TableCell align="right">ROI x Month</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.plantID}>
                <TableCell component="th" scope="row">
                  <a
                    target="_blank"
                    href={`https://marketplace.plantvsundead.com/#/plant/${row.plantID}`}
                    rel="noreferrer"
                  >
                    {row.plantID}
                  </a>
                </TableCell>
                <TableCell align="left">{row.type}</TableCell>
                <TableCell align="right">{row.le}</TableCell>
                <TableCell align="right">{row.hour}</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
                <TableCell align="right">${row.costUSD.toFixed(2)}</TableCell>
                <TableCell align="right">{row.leHour.toFixed(2)}</TableCell>
                <TableCell align="right">{row.leDay.toFixed(2)}</TableCell>
                <TableCell align="right">{row.leMonth.toFixed(2)}</TableCell>
                <TableCell align="right">{row.time.toFixed(2)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default MarketplacePlants
