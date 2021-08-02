/* eslint-disable no-console */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { actionTypes } from '../../features/plant'

const FileUpload: React.FC = () => {
  const dispatch = useDispatch()

  const readFileOnUpload = (e: any) => {
    try {
      const fileReader = new FileReader()
      fileReader.onloadend = () => {
        const toParse = fileReader.result as string
        dispatch({
          type: actionTypes.SET_PLANTS,
          payload: JSON.parse(toParse),
        })
      }
      fileReader.readAsText(e.target.files[0])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <br />
      <Button variant="contained" component="label">
        Upload PVU JSON File
        <input
          type="file"
          onChange={readFileOnUpload}
          accept="application/JSON"
          hidden
        />
      </Button>
      <br />
    </>
  )
}

export default FileUpload
