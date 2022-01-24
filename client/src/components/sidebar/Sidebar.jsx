import React, {useEffect, useState} from 'react';
import './sidebar.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
      const getCats = async () => {
        const res = await axios.get("/categories")
        setCats(res.data)
      }
      getCats()
  }, [])
  return <div className='sidebar'>
    <div className='sidebarItem'>
        <span className='sidebarTitle'>ABOUT ME</span>
        <img src='https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg' alt=''/>
        <p>Excepteur dolore labore do est irure Lorem magna. Pariatur officia irure sunt eiusmod enim laborum consectetur dolore laborum ea. Aliqua labore dolor incididunt officia mollit commodo irure ea culpa cupidatat ut quis reprehenderit non.</p>
    </div>
    <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
        <ul className='sidebarList'>
          {cats.map(c => (
            <Link to={`/?cat=${c.name}`} className='link'>
            <li className='sidebarListItem'>{c.name}</li>
            </Link>
          ))}
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

