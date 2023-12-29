import { useContext, useEffect, useState } from 'react'
import alarmsvg from '../assets/beepr/alarm.svg'
import { BeepRContext } from '../context'
import { msToiso } from '../sundial/compon/msToiso'
import { isoToms } from '../beepr/isoToms'
import '../beepr/watch.css'
import '../beepr/beepr.css'

export function WatchIt() {
  const { hasAlarm, setHasAlarm, selectAlarm, setSelectAlarm,
    selectHour, selectMinute, selectSecond, soundmp3, timer }: any = useContext(BeepRContext)

  const [renderTime, setRenderTime] = useState(new Date().getTime())
  useEffect(() => {
    const timeout = setInterval(() => setRenderTime(new Date().getTime()), 1000)
    return () => { clearInterval(timeout) }
  }, [renderTime])

  function handleAlarm() {
    timer.stop()
    localStorage.removeItem("beepr:alarm")
    localStorage.removeItem("beepr:lapse")
    localStorage.removeItem("beepr:pausetimeref")
    localStorage.removeItem("beepr:starttimeref")
    localStorage.removeItem("beepr:totalelapsedpausetimeref")
    if (hasAlarm) {
      soundmp3.pause()
      setHasAlarm(false)
      soundmp3.loop = false
      setSelectAlarm(false)
      return false
    }
    if (selectHour.includes("Hour") &&
      selectMinute.includes("Minute") &&
      selectSecond.includes("Second")) { setHasAlarm(true) }
  }

  selectAlarm === msToiso(timer.getElapsedRunningTime()) &&
    (soundmp3.play(), soundmp3.loop = true)

  return <div onClick={handleAlarm} className={`app-column watchit ${hasAlarm ? 'wactiver' : 'disabled'} ${soundmp3.loop && 'wshaker'}`}>
    {hasAlarm && msToiso(isoToms(selectAlarm) - timer.getElapsedRunningTime())}
    <img src={alarmsvg} alt='Alarm'
      className={`alarm-icon ${hasAlarm && 'activer'} ${soundmp3.loop && 'shaker'}`} />
  </div>
}