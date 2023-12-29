import { useEffect, useState } from 'react'

export function DateR() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const [dayNow, setDayNow] = useState('')
  const [dateNow, setDateNow] = useState('')
  const [monthNow, setMonthNow] = useState('')
  const [yearNow, setYearNow] = useState('')

  useEffect(() => {
    const timeout = setInterval(() => {
      let date: any = new Date().getDate(),
        year: any = new Date().getFullYear()

      setDayNow(days[(new Date().getDay())])
      setDateNow(date)
      setMonthNow(months[(new Date().getMonth())])
      setYearNow(year)
    }, 1000)
    return () => clearInterval(timeout)
  }, [yearNow, monthNow, dateNow, dayNow])

  return <>{dayNow && dayNow + ', '} {dateNow} {monthNow} {yearNow}</>
}