import React from 'react'
import './sidebar.css'

const SideBar = () => {
  return (
    <div className="sidebar">
    <div className="sidebarItem">
      <span className="sidebarTitle">ABOUT ME</span>
      <img
        src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
        alt=""
      />
      <p>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
        amet ex esse.Sunt eu ut nostrud id quis proident.
      </p>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">CATEGORIES</span>
      <ul className="sidebarList">
        <li className="sidebarListItem">
          {/* <Link className="link" to="/posts?cat=Life">
            
          </Link> */}
          Life
        </li>
        <li className="sidebarListItem">
          {/* <Link className="link" to="/posts?cat=Music">
            
          </Link> */}
          Music
        </li>
        <li className="sidebarListItem">
          {/* <Link className="link" to="/posts?cat=Sport">
           
          </Link> */}
           Sport
        </li>
        <li className="sidebarListItem">
          {/* <Link className="link" to="/posts?cat=Style">
            
          </Link> */}
          Style
        </li>
        <li className="sidebarListItem">
          {/* <Link className="link" to="/posts?cat=Tech">
            
          </Link> */}
          Tech
        </li>
        <li className="sidebarListItem">
          {/* <Link className="link" to="/posts?cat=Cinema">
            
          </Link> */}
          Cinema
        </li>
      </ul>
    </div>
    <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
      </div>
    </div>
  </div>
  )
}

export default SideBar