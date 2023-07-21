import React, { useState } from 'react'
import ButtonOverlay from './ButtonOverlay'
import { BsGrid } from "react-icons/bs"
import { BsListUl } from "react-icons/bs"
import { BiLibrary } from "react-icons/bi";
import { VscLibrary } from "react-icons/vsc"
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai"
import Menu from './Menu'
function LibraryHeader({setActiveId, activeId}) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    
  }
  return (
    <div className="library-header">
      <Menu >
        <div onClick={() => {  setActiveId(4); setActive(!active) }} className="menu">
        {(activeId === 4 && active)? <BiLibrary/> : <VscLibrary/>}
        <p>Library</p>
        </div>
      </Menu>
    <div className='Library-header-btn-container'>
      <ButtonOverlay id={1} activeId={activeId} setActiveId={setActiveId} title="Create Playlist or folder" icon={<AiOutlinePlus/>}/>
      <div onClick={() => setActive(!active)} className="switch">

      {
        (active)?
        <ButtonOverlay id={2} activeId={activeId} setActiveId={setActiveId} title="Switch to List View" icon={<BsListUl/>}/>:
        <ButtonOverlay id={2} activeId={activeId} setActiveId={setActiveId} title="Switch to Grid View" icon={<BsGrid/>}/>
        }
      </div>
      <ButtonOverlay onClick={handleClick} id={3} activeId={activeId} setActiveId={setActiveId}  title="Reduce Your Library" icon={<AiOutlineArrowLeft/>}/>
    </div>
    </div>
  )
}

export default LibraryHeader
