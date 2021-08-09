import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { useStyles } from './styles'
import { selectors } from '../../features/token'

export const Navbar: React.FC = () => {
  const token = useSelector(selectors.getToken)
  const classes = useStyles()
  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              PVU ${Number(token.price).toFixed(2)}
            </Typography>
            <NavLink to="/plant-roi">Plants ROI</NavLink>
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  )
}
