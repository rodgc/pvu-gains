import React, { Fragment } from 'react'
import db from '../../firebase'
import { useStyles } from './styles'

function convertTime(time: number) {
  const date = new Date(time * 1000)
  return `${date.getHours()}:${date.getMinutes()}`
}

function isActive(time: number) {
  const currentDate = new Date()
  const resetDate = new Date(time * 1000)
  return currentDate.getHours() === resetDate.getHours()
}

const GroupsTable: React.FC = () => {
  const [groups, setGroups] = React.useState<any[]>([])
  const classes = useStyles()

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
              <td
                className={isActive(group.time.seconds) ? classes.active : ''}
              >
                {convertTime(group.time.seconds)}
              </td>
              <td
                className={isActive(group.time2.seconds) ? classes.active : ''}
              >
                {convertTime(group.time2.seconds)}
              </td>
              <td
                className={isActive(group.time3.seconds) ? classes.active : ''}
              >
                {convertTime(group.time3.seconds)}
              </td>
              <td
                className={isActive(group.time4.seconds) ? classes.active : ''}
              >
                {convertTime(group.time4.seconds)}
              </td>
              <td
                className={isActive(group.time5.seconds) ? classes.active : ''}
              >
                {convertTime(group.time5.seconds)}
              </td>
              <td
                className={isActive(group.time6.seconds) ? classes.active : ''}
              >
                {convertTime(group.time6.seconds)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default GroupsTable
