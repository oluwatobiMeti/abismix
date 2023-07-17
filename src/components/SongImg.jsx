import React from 'react'

function SongImg(props) {
  return (
    <img src={props.src} alt={props.alt} className={props.className} />
  )
}

export default SongImg;
