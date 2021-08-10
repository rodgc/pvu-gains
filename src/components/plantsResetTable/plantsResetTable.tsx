import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import db from '../../firebase'

function convertTime(time: number) {
  const date = new Date(time * 1000)
  return date.toLocaleTimeString()
}

const PlantsResetTable: React.FC = () => {
  const { ownerId } = useParams<{ ownerId: string }>()
  const [plants, setPlants] = React.useState<any[]>([])

  React.useEffect(() => {
    db.collection('lands')
      .doc(ownerId)
      .collection('plants')
      .orderBy('startTime', 'asc')
      .onSnapshot((snapshot) =>
        setPlants(snapshot.docs.map((doc) => doc.data()))
      )
  }, [])

  return (
    <Fragment>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Plant ID</th>
            <th>Coordinates</th>
            <th>Reset Time</th>
          </tr>
        </thead>

        <tbody>
          {plants.map((plant) => (
            <tr key={plant.plantId}>
              <td>{plant.plantId}</td>
              <td>
                {plant.land.x}, {plant.land.y}
              </td>
              <td>{convertTime(plant.startTime)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default PlantsResetTable
