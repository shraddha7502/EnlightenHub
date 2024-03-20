import React from 'react'
import { Link } from 'react-router-dom';

import StCard from './StCard'
const stLink=[
  {
    display:'Profile',
    url:""
  },
  {
    display:'Assignments',
    url:""
  },
  {
    display:'Quizes',
    url:""
  },
  {
    display:'Your Courses',
    url:""
  },
  {
    display:'Update Profile',
    url:""
  },
  {
    display:'Your Certificates',
    url:""
  },
  {
    display:'Update Profile',
    url:""
  },
  {
    display:'Communication',
    url:""
  },
  
]
function Student() {
  return (
    <div className='text-3xl text-gray-800  text-center'>
        <h3>Student Page:</h3>
        <div  className='container-fluid text-gray-600  bg-gray-50 p-2 mt-1 text-center content-center mx-auto'>
          <div className='row '>
            <div className='col-sm-12'>
            {
              stLink.map((data,index)=>{
                return(
                <Link to={data.url}> <StCard content={data.display}/></Link> 
                ) 
              }
              )
            }
            </div>
         
            {/* <StCard content="Update Profile"/> */}
            
            </div>
        </div>
    </div>
  )
}
export default Student
