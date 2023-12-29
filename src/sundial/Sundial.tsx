import { useEffect, useState } from 'react'
import { useTimerS } from './compon/useTimerS'
import { msToiso } from './compon/msToiso'
import { Laps } from './compon/Laps'
import './sundial.css'
import startButton from '.././assets/sundial/play.svg'
import stopButton from '.././assets/sundial/stop.svg'
import downButton from '.././assets/sundial/down.svg'
import pauseButton from '.././assets/sundial/pause.svg'

export function Sundial() {
  const timer = useTimerS()
  const [renderTime, setRenderTime] = useState(new Date().getTime())
  useEffect(() => {
    const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 1000)
    return () => { clearTimeout(timeout) }
  }, [renderTime])

  const [lapse, setLapse] = useState(() => {
    const savedLapse = localStorage.getItem("sundial:lapse")
    if (savedLapse) { return JSON.parse(savedLapse) }
    else { return [] }
  })
  useEffect(() => {
    localStorage.setItem("sundial:lapse", JSON.stringify(lapse))
  }, [lapse])

  function handleLapse() { setLapse([...lapse, timer.getElapsedRunningTime()]) }

  function clearLapse() {
    lapse.length = 0
    localStorage.removeItem("sundial:lapse")
    localStorage.removeItem("sundial:pausetimeref")
    localStorage.removeItem("sundial:starttimeref")
    localStorage.removeItem("sundial:totalelapsedpausetimeref")
    timer.stop()
  }

  return <div className='app-center'>
    <div className='app-column app-320'>
      <p className='number-sd'>{msToiso(timer.getElapsedRunningTime())}</p>
      <div className='app-row'>
        {timer.isStopped() ?
          <button className='app-center button-sd'
            onClick={() => timer.start()}>
            <img src={startButton} alt='Start' style={{ height: 100, width: 100 }} />
          </button>
          :
          <>
            <button className='app-center button-sd'
              onClick={() => clearLapse()}>
              <img src={stopButton} alt='Stop' style={{ height: 100, width: 100 }} />
            </button>
            <button className='app-center button-sd'
              onClick={() => handleLapse()}>
              <img src={downButton} alt='Laps' style={{ height: 100, width: 100 }} />
            </button>
            <button className='app-center button-sd'
              onClick={() => timer.isRunning() ? timer.pause() : timer.resume()}>
              {timer.isRunning() ? <img src={pauseButton} alt='Pause' style={{ height: 100, width: 100 }} /> : <img src={startButton} alt='Resume' style={{ height: 100, width: 100 }} />}
            </button>
          </>
        }
      </div>
      {lapse.length > 0 && <Laps laps={lapse} />}
    </div>
  </div>
}