import { useEffect, useState } from 'react'
import './currnow.css'
import { currCode } from './currcode'

export function CurrNow() {
  const [selectFrom, setSelectFrom] = useState('From')
  const [selectTo, setSelectTo] = useState('To')
  const [amountFrom, setAmountFrom] = useState<any>('')
  const [amountTo, setAmountTo] = useState('')

  useEffect(() => {
    async function fetchData() {
      if (amountFrom === '' || (amountFrom > 0 && (selectTo === 'To' || selectFrom === 'From'))) { return false }
      await fetch(`https://api.currencybeacon.com/v1/convert?api_key=yeBOjCHwyqYbRHcRkgDj43rl8rxuTgWZ&from=${selectFrom}&to=${selectTo}&amount=${amountFrom}`)
        .then(res => res.json())
        .then(res => setAmountTo(res.value))
    }
    fetchData()
  }, [amountFrom, selectTo, selectFrom])

  return <div className='app-center'>
    <div className='app-320'>
      <div className='currnow-box'>
        <input
          className='currnow-input'
          value={amountFrom}
          onChange={e => setAmountFrom(e.target.value)}
          min="1"
        />
        <select value={selectFrom} onChange={e => setSelectFrom(e.target.value)} className='currnow-select'>
          <option disabled value="From">From</option>
          {currCode.map((code: any, index: any) => (
            <option key={index} value={code}>{code}</option>
          ))}
        </select>
      </div>
      <div className='currnow-box'>
        <input
          className='currnow-input'
          value={amountTo}
          readOnly
        />
        <select value={selectTo} onChange={e => setSelectTo(e.target.value)} className='currnow-select'>
          <option disabled value="To">To</option>
          {currCode.map((code: any, index: any) => (
            <option key={index} value={code}>{code}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
}