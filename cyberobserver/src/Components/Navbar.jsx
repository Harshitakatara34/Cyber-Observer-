import React from 'react'
import Bottom from './Bottom'
import Footer1 from './Footer'
import Footer2 from './Footer1'
import Middle from './Middle'
import MiddleSec from './MiddleSec'
import NavBottom from './NavBottom'
import NavMid from './NavMid'
import NavTop from './NavTop'

const Navbar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavTop/>
        <NavMid/>
        <NavBottom/>
        <Middle/>
        <MiddleSec/>
        <Bottom/>
        <Footer1/>
        <Footer2/>
    </div>
  )
}

export default Navbar