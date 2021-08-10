/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import db from '../../firebase'
import { usePVUToken } from '../../hooks'

const LandsTable: React.FC = () => {
  const [lands, setLands] = React.useState<any[]>([])
  const [value, setValue] = React.useState<string>('')
  const { pvuToken } = usePVUToken()

  const addLand = () => {
    if (!value) {
      return
    }

    db.collection('lands').doc(value).set({
      plantId: '',
      startTime: '',
    })
  }

  React.useEffect(() => {
    db.collection('lands').onSnapshot((snapshot) => setLands(snapshot.docs))
  }, [])

  return (
    <Fragment>
      {pvuToken && (
        <div className="row">
          <form className="col s12 center-align">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="landId"
                  placeholder="Land ID"
                  type="text"
                  className="validate"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <button
                  type="button"
                  className="waves-effect waves-light btn-small"
                  onClick={addLand}
                >
                  Add Land
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <table className="highlight">
        <thead>
          <tr>
            <th>Owner</th>
            <th>Land</th>
            <th>Plants</th>
          </tr>
        </thead>

        <tbody>
          {lands.map((land) => (
            <tr key={land.id}>
              <td>{land.id}</td>
              <td>
                <a
                  href={`https://marketplace.plantvsundead.com/farm/other/${land.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="waves-effect waves-light btn-small"
                >
                  Visit
                </a>
              </td>
              <td>
                <NavLink
                  to={`/owner/${land.id}`}
                  className="waves-effect waves-light btn-small"
                >
                  View
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default LandsTable
