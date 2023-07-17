import React from 'react'


function ButtonIcon({title, icon, show, hide, isActive}) {
  return (
    <div onMouseEnter={show} onMouseLeave={hide} className='button'>
      {isActive &&
      <p className='more'>{title}</p>}
    <button className="btn">
      {icon}
    </button>
    </div>
  )
}

export default ButtonIcon
