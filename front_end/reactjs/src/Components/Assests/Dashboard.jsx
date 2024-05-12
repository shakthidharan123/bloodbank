import React from 'react'
import './dash.css'
import Sidebar from './Sidebar'
import{Outlet, Route,Routes} from "react-router-dom";
import Card1 from './card1'



function Dashboard() {
  return (
    <>
    
    <div className="App">
      <div className="AppGlass">
        <div className='heading'>
          <h1>Admin dashboard</h1>
        </div>
      <Sidebar/>
        <Outlet />
    </div>
      </div> 
      
    </>
  )
}

export default Dashboard