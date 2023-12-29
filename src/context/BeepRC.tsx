import { createContext, useEffect, useState } from 'react'
import { useTimer } from './beeprc/useTimer'
import { secondNumber, minuteNumber, hourNumber } from './beeprc/helper'
import Sound from '../assets/beepr/beepr.mp3'
const soundmp3 = new Audio(Sound)

export const BeepRContext: any = createContext(null)

export function BeepRC({ children }: any) {
  const timer = useTimer()

  const [hasAlarm, setHasAlarm] = useState<any>(() => {
    const savedHasAlarm = localStorage.getItem("beepr:hasalarm")
    if (savedHasAlarm) { return JSON.parse(savedHasAlarm) }
    else { return false }
  })
  useEffect(() => {
    localStorage.setItem("beepr:hasalarm", JSON.stringify(hasAlarm))
  }, [hasAlarm])

  const [selectHour, setSelectHour] = useState('Hour')
  const [selectMinute, setSelectMinute] = useState('Minute')
  const [selectSecond, setSelectSecond] = useState('Second')

  const [selectAlarm, setSelectAlarm] = useState<any>(() => {
    const savedAlarm = localStorage.getItem("beepr:alarm")
    if (savedAlarm) { return JSON.parse(savedAlarm) }
    else { return false }
  })
  useEffect(() => {
    localStorage.setItem("beepr:alarm", JSON.stringify(selectAlarm))
  }, [selectAlarm])

  return <BeepRContext.Provider
    value={{
      hasAlarm, setHasAlarm, selectAlarm, setSelectAlarm, selectHour, setSelectHour, selectMinute, setSelectMinute,
      selectSecond, setSelectSecond, soundmp3, timer, secondNumber, minuteNumber, hourNumber
    }}>
    {children}
  </BeepRContext.Provider>
}