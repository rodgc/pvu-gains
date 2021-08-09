import React, { Fragment } from 'react'
import db from '../../firebase'

const LandsTable: React.FC = () => {
  const [lands, setLands] = React.useState<any[]>([])

  React.useEffect(() => {
    db.collection('lands').onSnapshot((snapshot) => setLands(snapshot.docs))
  }, [])

  return (
    <Fragment>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Owner</th>
          </tr>
        </thead>

        <tbody>
          {lands.map((land) => (
            <tr key={land.id}>
              <td>{land.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default LandsTable
