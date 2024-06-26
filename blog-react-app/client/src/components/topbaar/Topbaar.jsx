import React from 'react'
import './topbaar.css'
import { Link } from 'react-router-dom'

const Topbaar = () => {
  const user = false;
   
  return (
    <div className='top'>
        <div className='topLeft'>
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
    </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'><Link className='link' to='/'>HOME</Link></li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'><Link className='link' to='/'>WRITE</Link></li>
                <li className='topListItem'>{user && "LOGOUT"}</li>

            </ul>
        </div>
        <div className='topRight'>
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  )
}

export default Topbaar