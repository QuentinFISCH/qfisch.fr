import React from 'react'
import "./ElementHeading.scss"

export default function ElementHeading({title = 'Title'}) {
  return (
    <div className='element-heading'>
        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M17.7,11.2C17.7,11.2,17.7,11.2,17.7,11.2l-5-5c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l3.3,3.3H7c-0.6,0-1,0.4-1,1 s0.4,1,1,1h7.6l-3.3,3.3c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0c0,0,0,0,0,0l5-5C18.1,12.3,18.1,11.6,17.7,11.2z"></path></svg>
        <h2>{title}</h2>
    </div>
  )
}
