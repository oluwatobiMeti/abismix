import React, { useState } from 'react'
import { BiLibrary } from "react-icons/bi"
import { VscLibrary } from "react-icons/vsc"
import ButtonIcon from './ButtonIcon'
import { GrAdd } from "react-icons/gr"
import { AiOutlineArrowLeft } from "react-icons/ai"
import MusicDisplay from './MusicDisplay'

function Library({handleClick, active, activeId}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [active1, setActive1] = useState(useContext(LibraryContext));
  return (
    <div className="library-header">
       <Menu onclick={handleClick}>
         {(activeId === 4 && active)? <BiLibrary/> : <VscLibrary/>}
       </Menu>
       <div className="iconContainer">
        <ButtonIcon isActive={activeIndex === 1} show={() => setActiveIndex(1)} hide={() => setActiveIndex(0)} title="Create playlist or folder" icon={<GrAdd/>}/>
        <MusicDisplay active={active1} setActive={setActive1}/>
        <ButtonIcon isActive={activeIndex === 2} show={() => setActiveIndex(2)} hide={() => setActiveIndex(0)} title="Create playlist or folder" icon={<AiOutlineArrowLeft/>}/>
       </div>
       
       </div>
  )
}

export default Library
