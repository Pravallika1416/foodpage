import React from 'react'
import './CuisineMenu.css'

function CuisineMenu({image,title,description}) {
  return (
    <div className='cuisineMenu-content'>
        <img src={image} alt="Food" />
        <h4>{title}</h4>
     <p>{description}</p>
    </div>
  )
}

export default CuisineMenu
