import React, { useState } from 'react'
function ButtonOverlay({icon, title, id, activeId, setActiveId}) {
  const [active, setActive] = useState(false);
  return (
    <div className='button-overlay'>
      {(active && activeId === id) && <div className="more">
        <span>{title}</span>
      </div>}
      <button className='btn' onMouseEnter={() => {setActiveId(id);  setTimeout(() => {
      setActive(!active)
    }, 1000)}} onMouseLeave={() => { setActiveId(0); setActive(false)}}>{icon}</button>
    </div>
  )
}

export default ButtonOverlay
