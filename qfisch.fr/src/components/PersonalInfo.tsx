import React from 'react'
import "./PersonalInfo.scss"
import ElementHeading from './ElementHeading'

export default function PersonalInfo() {
  return (
    <div className='personal-info'>
        <img src="src/assets/PFP.jpeg" alt="pfp" />
        <div className="info about">
            <ElementHeading title='About' />
            <p>Engineering course specialising in Computer Science with the development of physics knowledge, mathematics, algorithms and fundamentals. AI and Big Data specialisation (Machine Learning, NLP, Computer Vision). Secretary of blockchain and finance association (LaCity) and organizer of competitions and conferences with partners</p>
        </div>
        <div className="info contact">
            <ElementHeading title='Contact' />
            <p>Yo la street</p>
        </div>
        <div className="info skills">
            <ElementHeading title='Skills' />
            <p>Yo la street</p>
        </div>
    </div>
  )
}
