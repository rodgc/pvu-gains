/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  makeStyles,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import React from 'react'
import { MarketplacePlants } from '../components/marketplacePlants'
import { MarketplaceMotherTree } from '../components/marketplaceMotherTree'

interface TabPanelProps {
  children: React.ReactNode
  index: number
  value: number
  dir: 'ltr' | 'rtl'
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '15px',
    marginBottom: '15px',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '10px',
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  },
}))

export const Marketplace: React.FC = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = React.useState(0)

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue)
  }

  const handleChangeIndex = (index: number) => {
    setValue(index)
  }

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs example"
      >
        <Tab
          label="Plants"
          id="full-width-tab-0"
          aria-controls="full-width-tabpanel-0"
        />
        <Tab
          label="Mother Tree"
          id="full-width-tab-1"
          aria-controls="full-width-tabpanel-1"
        />
        <Tab
          label="Lands"
          id="full-width-tab-2"
          aria-controls="full-width-tabpanel-2"
          disabled
        />
      </Tabs>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MarketplacePlants />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MarketplaceMotherTree />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </div>
  )
}
