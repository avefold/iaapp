import { useState } from 'react'
import { evaluate } from './evaluate'
import './calcit.css'

export function CalcIt() {
  const [input, setInput] = useState<any[]>([])
  const [result2, setResult2] = useState('')

  function handleClick(value: any) {
    setInput([...input, value])
    setResult2('')
  }

  function handleRemove() {
    setInput(input.slice(0, -1))
  }

  function handleResult() {
    let result1: any = ((input.map((e: any) => e).join('')).toString()).replace(',', '.')
    let result3: any = ((evaluate(result1)).toString()).replace('.', ',')
    setResult2(result3)
    setInput([])
    console.clear()
  }

  function handleClear() {
    setInput([])
    setResult2('')
    console.clear()
  }

  return <div className='grid-container'>
    {/* row1 */}
    <p className='app-center item1'>{result2 ? result2 : input}</p>
    {/* row2 */}
    <button onClick={() => handleClick(7)}>7</button>
    <button onClick={() => handleClick(8)}>8</button>
    <button onClick={() => handleClick(9)}>9</button>
    <button onClick={() => handleClick('\u00D7')}>{'\u00D7'}</button>
    {/* row3 */}
    <button onClick={() => handleClick(4)}>4</button>
    <button onClick={() => handleClick(5)}>5</button>
    <button onClick={() => handleClick(6)}>6</button>
    <button onClick={() => handleClick(':')}>:</button>
    {/* row4 */}
    <button onClick={() => handleClick(1)}>1</button>
    <button onClick={() => handleClick(2)}>2</button>
    <button onClick={() => handleClick(3)}>3</button>
    <button onClick={() => handleClick('+')}>+</button>
    {/* row5 */}
    <button onClick={() => handleClick('(')}>{'\u0028'}</button>
    <button onClick={() => handleClick(0)}>0</button>
    <button onClick={() => handleClick(')')}>{'\u0029'}</button>
    <button onClick={() => handleClick('-')}>-</button>
    {/* row6 */}
    <button onClick={() => handleClear()}>C</button>
    <button onClick={() => handleClick(',')}>,</button>
    <button onClick={() => handleRemove()}>{'\u21FD'}</button>
    <button onClick={() => handleResult()}>=</button>
  </div>
}