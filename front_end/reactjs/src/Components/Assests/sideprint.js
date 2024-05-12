import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaBuildingColumns } from "react-icons/fa6";
import './Sidebar.css';
 export const sideprint =[
  
  {icon:<MdOutlineSpaceDashboard className='iconn'/>,name:"Dashboard",path:'/dashboard',cName:'nav-text'},
        {icon:<FaHandHoldingWater  className='iconn'/>,name:"Stock",path:'/dashboard/stock',cName:'nav-text'},
       {icon:<ImProfile className='iconn'/>,name:"Donor",path:'/dashboard/donor',cName:'nav-text'},
        {icon:<FaHandHoldingMedical className='iconn'/>,name:'Donation',path:'/',cName:'nav-text'},
        {icon:<FaBuildingColumns  className='iconn'/>,name:'Bloodbank',path:'/dashboard/bloodbank',cName:'nav-text'}


];

