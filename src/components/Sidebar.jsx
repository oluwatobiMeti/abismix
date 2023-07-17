import React, { useState } from 'react'
import Menu from './Menu'
import { FiHome } from "react-icons/fi"
import { GoHomeFill } from "react-icons/go"
import { MdMoodBad } from "react-icons/md"
import { TbMoodSadFilled } from "react-icons/tb"
import { HiSearch } from "react-icons/hi"
import search from "../img/search (1).png"
function Sidebar() {
  const [activeId, setActiveId] = useState(0);
  let [active, setActive] = useState(false);
  const handleClick = () => { setActive(!active); if (active) {
      setActiveId(4)
     } else {
      setActiveId(0);
     }}
  return (
    <div>
      <div className='menuContainer'>
      <Menu onclick={() => { setActive(!active); if (active) {
         setActiveId(1)
      } else {
         setActiveId(0)
      }}}>
        {(activeId === 1 && active)? <GoHomeFill/> : <FiHome/>}
         <p>Home</p>
      </Menu>
      <Menu onclick={() => { setActive(!active); if (active) {
         setActiveId(2)
      } else {
         setActiveId(0);
      }}}>
        {(activeId === 2 && active)? <img src={search}/> : <HiSearch/>}
      </Menu>
      <Menu onclick={() => { setActive(!active); if (active) {
         setActiveId(3)
      } else {
         setActiveId(0);
      }}}>
        {(activeId === 3 && active)? <TbMoodSadFilled/> : <MdMoodBad/>}
      </Menu>
      </div>
      
    </div>
  )
}

export default Sidebar
