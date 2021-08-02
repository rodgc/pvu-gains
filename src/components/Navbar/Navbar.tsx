import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
// import { NavLink } from 'react-router-dom'
import { useStyles } from './styles'
import { FileUpload } from '../fileUpload'

export const Navbar: React.FC = () => {
  const classes = useStyles()
  return (
    <nav>
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              PVU
            </Typography>
            <FileUpload />
          </Toolbar>
        </AppBar>
      </div>
    </nav>
  )
}
