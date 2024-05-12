import React from 'react'
import { useState } from 'react';

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import {sideprint} from './sideprint';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import './Sidebar.css';
function Sidebar() {
  const[side,setSide] = useState(false);

  const showSidebar = ()=> setSide(!side);

  
    // const[row,setRow]=useState(
    //     [{icon:IoMenu ,name:""},
    //         {
    //         icon:FaRegUserCircle,
    //         name:"Admin"

    //     },
    //     {icon:MdOutlineSpaceDashboard,name:"Dashboard"},
    //     {icon:FaHandHoldingWater,name:"Stock"},
    //     {icon:ImProfile ,name:"Donor"},
    //     {icon:FaHandHoldingMedical,name:'Donation'}
    // ]
    // );
  return (
    <>
    <div className='Navbar'>
      <Link to='#' className='menu-bar'>
            <IoMenu onClick={showSidebar}/> 
      </Link>
    </div>
    <nav className={side ? 'nav-menu active' : 'nav-menu'}>
      <ul className='nav-menu-items'>
        <ul className='nav-bar-toggle'> 
          <Link to='#' className='menu-bar'>
          <IoClose onClick={showSidebar}/>
          </Link>
        </ul>
        {sideprint.map((item,index) => {
          return(
            <div className={item.cName}>
              <li>
              <Link to={item.path}>
                  {item.icon}
                  <h3>{item.name}</h3>
              </Link>
              </li>
            </div>
          )
        })}
      </ul>
    </nav>
    </>
    
    

  )
}

export default Sidebar