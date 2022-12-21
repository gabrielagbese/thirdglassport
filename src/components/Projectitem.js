import React from 'react'
import "./layout.css"

export default function Projectitem(props) {
    const img = props.img;
    const name = props.name;
    const description = props.description;
    const firstTech = props.first;
    const secondTech = props.second;
    const thirdTech = props.third;
  return (
    <div className='project-item-wrapper'>
        <img className='project-item-image' src={img}/>
        <div className='project-item-header'>
            <div className='project-item-name'><p>{name}</p></div>
            <div className='project-item-links'>Live</div>
        </div>
        <div className='project-item-tags'>
            <p className='project-item-tag'>{firstTech}</p>
            <p className='project-item-tag'>{secondTech}</p>
            <p className='project-item-tag'>{thirdTech}</p>
        </div>
        <div className='underline'></div>
        <div className='project-item-description'><p>{description}</p></div>
    </div>
    
  )
}
