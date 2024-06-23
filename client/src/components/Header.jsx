import React from 'react';
import logo from "./assets/victorian-logo.jpg";

function Header() {
  return (
   <nav className='navbar bg-light mb-4 p-0'>
    <div className='container'>
    <a className='navbar-brand' href='/'>
          <div className='d-flex' style={{alignItems:"center"}}>
            <img src={logo} alt='logo' className='mr-2' style={{width:"100px"}}/>
            <div style={{fontSize:"xx-large"}}>Project Board</div>
          </div>
        </a>
    </div>
   </nav>
  )
}

export default Header
