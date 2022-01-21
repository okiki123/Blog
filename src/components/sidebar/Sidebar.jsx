import React from 'react';
import './sidebar.css'
const Sidebar = () => {
  return <div className='sidebar'>
    <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg' alt=''/>
        <p>Excepteur dolore labore do est irure Lorem magna. Pariatur officia irure sunt eiusmod enim laborum consectetur dolore laborum ea. Aliqua labore dolor incididunt officia mollit commodo irure ea culpa cupidatat ut quis reprehenderit non.</p>
    </div>
    <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
            <li className='sidebarListItem'>Life</li>
            <li className='sidebarListItem'>Music</li>
            <li className='sidebarListItem'>Style</li>
            <li className='sidebarListItem'>Sport</li>
            <li className='sidebarListItem'>Tech</li>
            <li className='sidebarListItem'>Cinema</li>
        </ul>
    </div>
    <div className='sidebarItem'>
        <span className='sidebarTitle'>FOLLOW US</span>
        <div className='sidebarSocials'>
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
    </div>
  </div>;
};

export default Sidebar;

