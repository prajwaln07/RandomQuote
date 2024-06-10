import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom';
import { CiSaveDown1 } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className='navbar'>
    <NavLink to='/'>
    <img className='symbol' src='https://static.vecteezy.com/system/resources/previews/009/970/460/original/eps10-blue-quotation-mark-icon-isolated-on-white-background-double-quotes-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-ui-pictogram-and-mobile-application-vector.jpg'></img>
</NavLink>

<NavLink to='/'>
    <div className='tag-line'>Random Quote Generator</div>
</NavLink>
    <div className='second'>
    
    <NavLink to='/save' >Saved </NavLink>
<CiSaveDown1></CiSaveDown1>
</div>
    </div>
  )
}

export default Navbar