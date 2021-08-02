import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '@material-ui/core'
import { actionTypes } from '../../features/plant'

const FileUpload: React.FC = () => {
  const dispatch = useDispatch()
  //   const handleChange = (e: any) => {
  //     const fileReader = new FileReader()
  //     fileReader.readAsText(e.target.files[0], 'UTF-8')
  //     fileReader.onload = (_e) => {
  //       dispatch({
  //         type: actionTypes.SET_PLANTS,
  //         payload: JSON.parse(_e?.target?.result),
  //       })
  //     }
  //   }

  const readFileOnUpload = (e: any) => {
    const fileReader = new FileReader()
    fileReader.onloadend = () => {
      const toParse = fileReader.result as string
      dispatch({
        type: actionTypes.SET_PLANTS,
        payload: JSON.parse(toParse),
      })
    }
    fileReader.readAsText(e.target.files[0])
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
