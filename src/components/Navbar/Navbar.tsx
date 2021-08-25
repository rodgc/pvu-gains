import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectors } from '../../features/token'
import { useStyles } from './styles'

export const Navbar: React.FC = () => {
  const token = useSelector(selectors.getToken)
  const classes = useStyles()
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Plants vs Undead Tools ${Number(token.price).toFixed(2)}
        </Typography>
        <NavLink className={classes.links} to="/marketplace">
          Marketplace
        </NavLink>
      </Toolbar>
    </AppBar>
  )
}
