import bunLogo from '../assets/bun.svg'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import { WeatherU } from '../weatheru'

export function Home() {
  return <>
    <p>Welcome to IAAPP</p>
    <a href="https://bun.sh" target="_blank">
      <img src={bunLogo} className='logo bun' alt="Bun logo" />
    </a>
    <a href="https://react.dev" target="_blank">
      <img src={reactLogo} className='logo react' alt="React logo" />
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src={viteLogo} className='logo' alt="Vite logo" />
    </a>
    <p><WeatherU /></p>
  </>
}