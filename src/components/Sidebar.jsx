import React, { useState } from 'react'
import { FiHome } from "react-icons/fi"
import { GoHomeFill } from "react-icons/go"
import { MdMoodBad } from "react-icons/md"
import { TbMoodSadFilled } from "react-icons/tb"
import { HiSearch } from "react-icons/hi"
import { BiSolidSearch } from "react-icons/bi"
import Menu from './Menu'
import Library from './Library'

function Sidebar() {
  const [activeId, setActiveId] = useState(0);
  const [active, setActive] = useState(false);
  return (
    <div>
      <div className='menuContainer'>
      <Menu>
        <div onClick={() => {
          
          setActiveId(1);
          setActive(!active)
          }} className="menu">
        {( activeId === 1 && active)? <GoHomeFill/> : <FiHome/>}
         <p>Home</p>
         </div>
      </Menu>
      <Menu>
        <div className="menu" onClick={() => { setActiveId(2); setActive(!active)}}>
        {(activeId === 2 && active)? <BiSolidSearch/> : <HiSearch/>}
        <p>search</p>
        </div>
      </Menu>
      <Menu >
        <div onClick={() => {  setActiveId(3); setActive(!active) }} className="menu">
        {(activeId === 3 && active)? <TbMoodSadFilled/> : <MdMoodBad/>}
        <p>Mood</p>
        </div>
      </Menu>
      </div>
      <Library setActive={setActive} active={active} setActiveId={setActiveId} activeId={activeId}/>
    </div>
  )
}

export default Sidebar
