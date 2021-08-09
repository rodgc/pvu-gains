import React, { Fragment } from 'react'
import db from '../../firebase'

function convertTime(time: number) {
  const date = new Date(time * 1000)
  return `${date.getHours()}:${date.getMinutes()}`
}

const GroupsTable: React.FC = () => {
  const [groups, setGroups] = React.useState<any[]>([])

  React.useEffect(() => {
    db.collection('groups').onSnapshot((snapshot) =>
      setGroups(snapshot.docs.map((doc) => doc.data()))
    )
  }, [])

  return (
    <Fragment>
      <table className="highlight responsive-table">
        <thead>
          <tr>
            <th>Groups</th>
            <th>Time</th>
            <th>Time 2</th>
            <th>Time 3</th>
            <th>Time 4</th>
            <th>Time 5</th>
            <th>Time 6</th>
          </tr>
        </thead>

        <tbody>
          {groups.map((group) => (
            <tr key={group.name}>
              <td>{group.name}</td>
              <td>{convertTime(group.time.seconds)}</td>
              <td>{convertTime(group.time2.seconds)}</td>
              <td>{convertTime(group.time3.seconds)}</td>
              <td>{convertTime(group.time4.seconds)}</td>
              <td>{convertTime(group.time5.seconds)}</td>
              <td>{convertTime(group.time6.seconds)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default GroupsTable
