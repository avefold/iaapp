import { useContext } from 'react'
import { BeepRContext } from '../context'

export function BeepR() {
  const { setHasAlarm, setSelectAlarm, selectHour, setSelectHour, selectMinute, setSelectMinute,
    selectSecond, setSelectSecond, timer, secondNumber, minuteNumber, hourNumber }: any = useContext(BeepRContext)

  function handleSubmit(e: any) {
    e.preventDefault()
    timer.start()
    setSelectAlarm(`${selectHour}:${selectMinute}:${selectSecond}`)
    setSelectHour('Hour')
    setSelectMinute('Minute')
    setSelectSecond('Second')
    if (!selectHour.includes("Hour") &&
      !selectMinute.includes("Minute") &&
      !selectSecond.includes("Second")) { setHasAlarm(true) }
  }

  return <form onSubmit={handleSubmit}>
    <p className='app-respon beepr-box'>
      Will beep in
      <select value={selectHour} onChange={e => setSelectHour(e.target.value)}>
        <option disabled value="Hour">Hour</option>
        {hourNumber.map((hour: any, index: any) => (
          <option key={index} value={hour}>{hour}</option>
        ))}
      </select>:
      <select value={selectMinute} onChange={e => setSelectMinute(e.target.value)}>
        <option disabled value="Minute">Minute</option>
        {minuteNumber.map((minute: any, index: any) => (
          <option key={index} value={minute}>{minute}</option>
        ))}
      </select>:
      <select value={selectSecond} onChange={e => setSelectSecond(e.target.value)}>
        <option disabled value="Second">Second</option>
        {secondNumber.map((second: any, index: any) => (
          <option key={index} value={second}>{second}</option>
        ))}
      </select>
      later?
    </p>
    <br />
    {(!selectHour.includes("Hour") &&
      !selectMinute.includes("Minute") &&
      !selectSecond.includes("Second")
    ) && <button type="submit">OK</button>}
  </form>
}