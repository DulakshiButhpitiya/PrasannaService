import React from 'react'
import Footeerr from '../Footer/Footeerr'
import Headeerr from '../Header/Headeerr'
import { Outlet } from 'react-router'


const Layouttt = () => {
  return (
  <div style={{"width":"100%"}}>
        <Headeerr/>
        <Outlet/>
        <Footeerr/>
    </div>
  )
}

export default Layouttt