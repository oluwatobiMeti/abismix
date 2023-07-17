import React, {useContext, useState} from 'react';
import ButtonIcon from './ButtonIcon';
import { LibraryContext } from './LibraryContext';
import {BsGridFill} from "react-icons/bs";
import {BsListUl} from "react-icons/bs"

function MusicDisplay({active, setActive}) {
  
  return (
    <div>
      <LibraryContext.Provider value={active}>
      {
        (active === "list")? 
         <ButtonIcon onclick={() => setActive("grid")} isActive={activeIndex === 3} show={() => setActiveIndex(3)} hide={() => setActiveIndex(0)} title="Show grid view" icon={<GrAdd/>}/>:
         <ButtonIcon onclick={() => setActive("list")} isActive={activeIndex === 4} show={() => setActiveIndex(4)} hide={() => setActiveIndex(0)} title="Show list view" icon={<GrAdd/>}/>
      }
      </LibraryContext.Provider>
    </div>
  )
}

export default MusicDisplay
