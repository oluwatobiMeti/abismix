import React from 'react'
import LibraryHeader from './LibraryHeader'
function Library({setActiveId, activeId}) {
  return (
    <div className='library'>
      <LibraryHeader setActiveId={setActiveId} activeId={activeId}/>
    </div>
  )
}

export default Library
