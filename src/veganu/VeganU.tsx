import { useState } from 'react'
import { Water } from './compon/1.water'
import { Carbohydrate } from './compon/2.carbohydrate'
import { Protein } from './compon/3.protein'
import { Minerals } from './compon/4.minerals'
import { Vitamin } from './compon/5.vitamin'
import { Fiber } from './compon/6.fiber'
import { Fat } from './compon/7.fat'
import './veganu.css'

export function VeganU() {
  const [isShown, setIsShown] = useState('')
  return <>
    <div className='app-column pyramid'>
      <p className='app-center pyramid_section' onClick={() => setIsShown('7')}>F</p>
      <p className='app-center pyramid_section' onClick={() => setIsShown('6')}>F</p>
      <p className='app-center pyramid_section' onClick={() => setIsShown('5')}>V</p>
      <p className='app-center pyramid_section' onClick={() => setIsShown('4')}>M</p>
      <p className='app-center pyramid_section' onClick={() => setIsShown('3')}>P</p>
      <p className='app-center pyramid_section' onClick={() => setIsShown('2')}>C</p>
      <p className='app-center pyramid_section' onClick={() => setIsShown('1')}>W</p>
    </div>
    <p>
      {isShown === '1' ? 'WATER' :
        isShown === '2' ? 'CARBOHYDRATE' :
          isShown === '3' ? 'PROTEIN' :
            isShown === '4' ? 'MINERALS' :
              isShown === '5' ? 'VITAMIN' :
                isShown === '6' ? 'FIBER' :
                  isShown === '7' ? 'FAT' :
                    null}
    </p>
    <div className='app-respon veganu-box'>
      {isShown === '1' ? <Water /> :
        isShown === '2' ? <Carbohydrate /> :
          isShown === '3' ? <Protein /> :
            isShown === '4' ? <Minerals /> :
              isShown === '5' ? <Vitamin /> :
                isShown === '6' ? <Fiber /> :
                  isShown === '7' ? <Fat /> :
                    null}
    </div>
  </>
}