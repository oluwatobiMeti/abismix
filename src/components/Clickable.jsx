import React from 'react'
import RoundImage from './SongImg'
function Clickable(props) {
  return (
    <div className={props.className}>
      <RoundImage/>
      <div className={props.className1}>
        <p>title</p>
        <p>artist</p>
      </div>
    </div>
  )
}

export default Clickable
