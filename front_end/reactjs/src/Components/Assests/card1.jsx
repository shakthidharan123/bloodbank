import React from 'react'
import {card1data} from './card1data'
import './card1.css'
import Blood from './images/Blood.jpeg'
function card1() {
    
  return (
    <div className='outer'>
        {card1data.map((item)=>{
            return(
                
            <div className='card'>
              {item.image}  
            <h2 className='title'>{item.name}</h2>
            <p className='text'>{item.unit}</p>
            </div>
            )
        })}
    </div>
  )
}

export default card1