import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Subs } from './Subs'

interface TimerOptions {
  delay?: number
  runOnce?: boolean
  fireOnStart?: boolean
  startImmediately?: boolean
  speedMultiplier?: number
}

const never = Number.MAX_SAFE_INTEGER

export function useTimerS(options: TimerOptions = {}, callback?: (overdueCallCount: number) => void) {

  const [firstRun, setFirstRun] = useState(true)

  const [renderTime, setRenderTime] = useState(Date.now())

  const [StartedRef, setStartedRef] = useState(() => {
    const savedStartedRef = localStorage.getItem("sundial:startedref")
    if (savedStartedRef) {
      return JSON.parse(savedStartedRef)
    } else { return false }
  })
  useEffect(() => {
    localStorage.setItem("sundial:startedref", JSON.stringify(StartedRef))
  }, [StartedRef])
  const startedRef: any = useRef()
  useEffect(() => {
    startedRef.current = StartedRef
  }, [StartedRef])

  const [PauseTimeRef, setPauseTimeRef] = useState(() => {
    const savedPauseTimeRef = localStorage.getItem("sundial:pausetimeref")
    if (savedPauseTimeRef) {
      return JSON.parse(savedPauseTimeRef)
    } else { return never }
  })
  useEffect(() => {
    localStorage.setItem("sundial:pausetimeref", JSON.stringify(PauseTimeRef))
  }, [PauseTimeRef])
  const pauseTimeRef: any = useRef()
  useEffect(() => {
    pauseTimeRef.current = PauseTimeRef
  }, [PauseTimeRef])

  const [StartTimeRef, setStarTimeRef] = useState(() => {
    const savedStartTimeRef = localStorage.getItem("sundial:starttimeref")
    if (savedStartTimeRef) {
      return JSON.parse(savedStartTimeRef)
    } else { return never }
  })
  useEffect(() => {
    localStorage.setItem("sundial:starttimeref", JSON.stringify(StartTimeRef))
  }, [StartTimeRef])
  const startTimeRef: any = useRef()
  useEffect(() => {
    startTimeRef.current = StartTimeRef
  }, [StartTimeRef])

  const [TotalElapsedPauseTimeRef, setTotalElapsedPauseTimeRef] = useState(() => {
    const savedTotalElapsedPauseTimeRef = localStorage.getItem("sundial:totalelapsedpausetimeref")
    if (savedTotalElapsedPauseTimeRef) {
      return JSON.parse(savedTotalElapsedPauseTimeRef)
    } else { return 0 }
  })
  useEffect(() => {
    localStorage.setItem("sundial:totalelapsedpausetimeref", JSON.stringify(TotalElapsedPauseTimeRef))
  }, [TotalElapsedPauseTimeRef])
  const totalElapsedPauseTimeRef: any = useRef()
  useEffect(() => {
    totalElapsedPauseTimeRef.current = TotalElapsedPauseTimeRef
  }, [TotalElapsedPauseTimeRef])

  const lastFireTimeRef = useRef(never)
  const nextFireTimeRef = useRef(never)
  const resumeTimeRef = useRef(never)
  const periodElapsedPauseTimeRef = useRef(0)

  const delay = useMemo(() => {
    const s = options.speedMultiplier ?? 1
    const d = options.delay ?? 0
    return s === 0 ? 0 : s > 0 && d > 0 ? Math.max(1, Math.round(d * (1 / s))) : d
  }, [options.delay, options.speedMultiplier])
  const runOnce = useMemo(() => options.runOnce, [options.runOnce])
  const fireOnStart = useMemo(() => options.fireOnStart, [options.fireOnStart])
  const startImmediately = useMemo(() => options.startImmediately, [options.startImmediately])

  const isStarted = useCallback((): boolean => {
    return startedRef.current
  }, [])
  const isStopped = useCallback((): boolean => {
    return !isStarted()
  }, [isStarted])
  const isPaused = useCallback((): boolean => {
    return isStarted() && pauseTimeRef.current !== never
  }, [isStarted, never])
  const isRunning = useCallback((): boolean => {
    return isStarted() && !isPaused()
  }, [isPaused, isStarted])

  const getElapsedRunningTime = useCallback((): number => {
    if (isStarted()) {
      if (isPaused()) {
        return pauseTimeRef.current - startTimeRef.current - totalElapsedPauseTimeRef.current
      }
      else { return Date.now() - startTimeRef.current - totalElapsedPauseTimeRef.current }
    }
    return 0
  }, [isPaused, isStarted])
  const getRemainingTime = useCallback((): number => {
    const currentTime = Date.now()
    if (isStarted() && !!delay) {
      if (isRunning()) { return Math.max(0, nextFireTimeRef.current - currentTime) }
      else if (isPaused()) {
        const edgeTime = lastFireTimeRef.current !== never ? lastFireTimeRef.current : startTimeRef.current
        return Math.max(0, delay - (pauseTimeRef.current - edgeTime - periodElapsedPauseTimeRef.current))
      }
    }
    return 0
  }, [isPaused, isRunning, isStarted, never, delay])

  const start = useCallback(
    (startTimeMillis = Date.now()) => {
      const newNextFireTime = delay
        ? Math.max(startTimeMillis, fireOnStart ? startTimeMillis : startTimeMillis + delay)
        : never
      setStarTimeRef(startTimeMillis)
      lastFireTimeRef.current = never
      nextFireTimeRef.current = newNextFireTime
      setPauseTimeRef(never)
      resumeTimeRef.current = startTimeMillis
      periodElapsedPauseTimeRef.current = 0
      setTotalElapsedPauseTimeRef(0)
      setStartedRef(true)
      setRenderTime(Date.now())
    },
    [never, delay, fireOnStart],
  )
  const stop = useCallback((): void => {
    setStarTimeRef(never)
    lastFireTimeRef.current = never
    nextFireTimeRef.current = never
    setPauseTimeRef(never)
    resumeTimeRef.current = never
    periodElapsedPauseTimeRef.current = 0
    setTotalElapsedPauseTimeRef(0)
    setStartedRef(false)
    setRenderTime(Date.now())
  }, [never])
  const pause = useCallback((): void => {
    if (isRunning()) {
      setPauseTimeRef(Date.now())
      resumeTimeRef.current = never
      setRenderTime(Date.now())
    }
  }, [isRunning, never])
  const resume = useCallback((): void => {
    if (isStarted() && isPaused()) {
      const currentTime = Date.now()
      nextFireTimeRef.current = currentTime + getRemainingTime()
      periodElapsedPauseTimeRef.current = 0
      setTotalElapsedPauseTimeRef(totalElapsedPauseTimeRef.current + (currentTime - pauseTimeRef.current))
      setPauseTimeRef(never)
      resumeTimeRef.current = currentTime
      setRenderTime(Date.now())
    }
  }, [isStarted, isPaused, getRemainingTime, never])

  useEffect(() => {
    const subs = new Subs()
    const checkTimer = () => {
      if (delay && !isPaused()) {
        const now = Date.now()
        if (now >= nextFireTimeRef.current) {
          const overdueCalls =
            lastFireTimeRef.current !== never ? Math.max(0, Math.floor((now - nextFireTimeRef.current) / delay)) : 0
          lastFireTimeRef.current = now
          periodElapsedPauseTimeRef.current = 0
          const overdueElapsedTime = overdueCalls * delay
          const newFireTime = Math.max(now, nextFireTimeRef.current + delay + overdueElapsedTime)
          nextFireTimeRef.current = newFireTime
          if (typeof callback === 'function') {
            try { callback(overdueCalls) } catch (e) { console.error(e) }
          }
          if (!runOnce) {
            subs.setTimeout(() => { checkTimer() }, Math.max(newFireTime - Date.now(), 1))
          } else { stop() }
        }
        else if (nextFireTimeRef.current < never) {
          subs.setTimeout(() => { checkTimer() }, Math.max(nextFireTimeRef.current - Date.now(), 1))
        }
      }
    }
    checkTimer()

    return subs.createCleanup()
  }, [callback, delay, never, isPaused, renderTime, runOnce, stop])

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false)
      if (startImmediately) { start() }
    }
  }, [firstRun, startImmediately, start])

  return useMemo(() => {
    return {
      start,
      stop,
      pause,
      resume,
      isStopped,
      isRunning,
      getElapsedRunningTime
    }
  }, [
    getElapsedRunningTime,
    isRunning,
    isStopped,
    resume,
    pause,
    stop,
    start
  ])
}