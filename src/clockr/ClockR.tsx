import { useEffect, useState } from 'react'

export function ClockR() {
  const [hourDigital, setHourDigital] = useState('')
  const [minutesDigital, setMinutesDigital] = useState('')

  useEffect(() => {
    const timeout = setInterval(() => {
      let HH: any = new Date().getHours(),
        MM: any = new Date().getMinutes()
      if (HH < 10) HH = `0${HH}`
      if (MM < 10) MM = `0${MM}`
      setHourDigital(HH)
      setMinutesDigital(MM)
    }, 1000)
    return () => clearInterval(timeout)
  }, [hourDigital, minutesDigital])

  return <>{hourDigital && hourDigital + ':'}{minutesDigital}</>
}