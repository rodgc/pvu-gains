import React, { Fragment } from 'react'
import db from '../../firebase'

function convertTime(time: number) {
  const date = new Date(time * 1000)
  return date.toLocaleTimeString()
}

const PlantsResetTimeTable: React.FC = () => {
  const [plants, setPlants] = React.useState<any[]>([])

  React.useEffect(() => {
    db.collection('lands')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          db.collection('lands')
            .doc(doc.id)
            .collection('plants')
            .onSnapshot((snapshot) => {
              setPlants((oldPlants) => [
                ...oldPlants,
                ...snapshot.docs.map((plant) => plant.data()),
              ])
            })
        })
      })
  }, [])

  return (
    <Fragment>
      <table className="highlight">
        <thead>
          <tr>
            <th>Plant ID</th>
            <th>Coordinates</th>
            <th>Reset Time</th>
          </tr>
        </thead>

        <tbody>
          {plants.map((plant) => (
            <tr key={Math.random()}>
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

export default PlantsResetTimeTable
