import React, { useState } from 'react'
import {tableData} from './tableData'
import { Link } from 'react-router-dom';

import Datatable from 'react-data-table-component'
import './table.css'
import { Outlet } from 'react-router'

function Table() {
    const col =  [
        {name:'Blood Bank Name',selector: row=>row.bname}
        ,
        {name:'Location',selector: row=>row.city},
        {name:'Contact',selector:row=>row.contact},
        {name:'manage',
        cell: row => (
          <div className='manage'>
              <button className='ebut'onClick={() => handleEdit(row)}>Edit</button>
              <button className='dbut'onClick={() => handleDelete(row)}>Delete</button>
              <Link to='/dashboard/bloodbank/bstock'>   <button className='dbut'onClick={() => Showstock(row)}>Stock</button>
              </Link>
          </div>
      )
        }
        
    ]
    
    const [data,setdata] = useState(tableData);
    function handleEdit(row){
      console.log("Edit button clicked");

    }
    function handleDelete(row){
      console.log("Edit button clicked");
      
    }
    function Showstock(row){
      console.log('Link');
      
    }

    function handleSearch(event){
      const newData = tableData.filter(row => {
        return row.bname.toLowerCase().includes(event.target.value.toLowerCase());
         

      })
      setdata(newData);
    }

    const tablestyle={
        table:{
            style:{
                background:'transparent'
            }
        },
        
        rows:{
            style:{
                background:'transparent',
                minHeight: '72px'
            }
        },
        head:{
            style:{
                backgroundColor:'#FDB44E'
            }
        },
        headCells:{
            style:{
                background:'transpaerent'
            }
        },
        headRow:{
            style:{
                background:'transparent' ,
                fontWeight: 'bold',
                fontSize:'18px',
                fontFamily:'"Poppins", sans-serif',
                padding:'3px 4px'

                
                    
            }
        },
        cells:{
            style:{
                padding:'10px'
            }
        }

       
    }
  return (
    <>
    
  <div className='Grid'>
    <div className='oTable'>
      <input
      onChange={handleSearch}
    type="search"
    className="search-bar"
    placeholder="Search"
      />
        <Datatable
        customStyles={tablestyle}
        data={data}
        columns={col}
        fixedHeader
        paginationPerPage={4}
        >

        </Datatable>
        <div className='pagination-container'>
                <button className='pagination-button'>Previous</button>
                <span className='current-page'>1</span>
                <button className='pagination-button'>Next</button>
            </div>  
    </div>
    
      <Outlet />
    
  </div>
  </>
  )
}

export default Table