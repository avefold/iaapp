import { memo } from 'react'
import { msToiso } from './msToiso'

export const Laps = memo(
  ({ laps }: any) => <table style={{ width: "100%" }}>
    <tbody>
      <tr>
        <th>Lap</th>
        <th style={{ width: "70%" }}>Time</th>
      </tr>
      {laps.map((lap: any, index: any) => {
        return <tr key={index}>
          <td>{++index}</td>
          <td>{msToiso(lap)}</td>
        </tr>
      })}
    </tbody>
  </table>)