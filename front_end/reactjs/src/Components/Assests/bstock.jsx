import React from 'react'
import {card1data} from './card1data'
import './bstock.css'
import Blood from './images/Blood.jpeg'
function card1() {
    
  return (
    <div className='bouter'>
        {card1data.map((item)=>{
            return(
                
            <div className='bcard'>
              {item.image}  
            <h2 className='btitle'>{item.name}</h2>
            <p className='btext'>{item.unit}</p>
            </div>
            )
        })}
    </div>
  )
}

export default card1