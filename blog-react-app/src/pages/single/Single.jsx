import React from 'react'
import './single.css'
import SinglePost from '../../components/singlepost/SinglePost'
import SideBar from '../../components/sidebar/SideBar'

const Single = () => {
  return (
    <div className='single'> 
        <SinglePost></SinglePost>
        <SideBar></SideBar>
    </div>
  )
}

export default Single