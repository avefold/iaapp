import { useEffect, useState } from 'react'
import CloseMenu from './assets/close.svg'
import MenuIcon from './assets/menu.svg'
import LogoHeader from './assets/logo.svg'
import './App.css'
import { handleNavigation, routingHandler } from './trouter'
import { Home } from './home'
import { BeepR } from './beepr'
import { CalcIt } from './calcit'
import { ClockR } from './clockr'
import { CurrNow } from './currnow'
import { DateR } from './dater'
import { DoList } from './dolist'
import { Sundial } from './sundial'
import { VeganU } from './veganu'
import { WatchIt } from './watchit'

export function App() {
  function Route({ path, children }: any) {
    const [currentPath, setCurrentPath] = useState('')
    useEffect(() => {
      const handleRouteUpdate = (route: any) => { setCurrentPath(route) }
      routingHandler(handleRouteUpdate)
    }, [])
    const shouldRenderChildren = currentPath === path
    return shouldRenderChildren && children
  }

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const homeMenu = () => (setClick(false), handleNavigation("/", {}))
  const beeprMenu = () => (setClick(false), handleNavigation("/beepr", {}))
  const calcitMenu = () => (setClick(false), handleNavigation("/calcit", {}))
  const currnowMenu = () => (setClick(false), handleNavigation("/currnow", {}))
  const dolistMenu = () => (setClick(false), handleNavigation("/dolist", {}))
  const sundialMenu = () => (setClick(false), handleNavigation("/sundial", {}))
  const veganuMenu = () => (setClick(false), handleNavigation("/veganu", {}))

  return <div className='app-respon height-app'>
    <div className='header'>
      <div className='beepr-app'>
        <WatchIt />
      </div>
      <div className='date-app'>
        <ClockR />
        <br />
        <DateR />
      </div>
      <div className='logo-nav'>
        <img src={LogoHeader} className='logo-header' alt="Logo Header" onClick={homeMenu} />
        <ul className={click ? 'nav-options active' : 'nav-options'}>
          <li tabIndex={0} className='app-center option' onClick={beeprMenu}>BeepR</li>
          <li tabIndex={0} className='app-center option' onClick={calcitMenu}>CalcIt</li>
          <li tabIndex={0} className='app-center option' onClick={currnowMenu}>CurrNow</li>
          <li tabIndex={0} className='app-center option' onClick={dolistMenu}>DoList</li>
          <li tabIndex={0} className='app-center option' onClick={sundialMenu}>Sundial</li>
          <li tabIndex={0} className='app-center option' onClick={veganuMenu}>VeganU</li>
        </ul>
      </div>
      <div className='mobile-menu' onClick={handleClick}>
        {click ? <img src={CloseMenu} className='app-center menu-icon' alt="Close Menu" /> :
          <img src={MenuIcon} className='app-center menu-icon' alt="Menu Icon" />}
      </div>
    </div>
    <div className='body-app'>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/beepr">
        <BeepR />
      </Route>
      <Route path="/calcit">
        <CalcIt />
      </Route>
      <Route path="/currnow">
        <CurrNow />
      </Route>
      <Route path="/dolist">
        <DoList />
      </Route>
      <Route path="/sundial">
        <Sundial />
      </Route>
      <Route path="/veganu">
        <VeganU />
      </Route>
    </div>
  </div>
}