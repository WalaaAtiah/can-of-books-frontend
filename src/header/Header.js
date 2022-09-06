import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
     
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style={{display:'flex',justifyContent:'space-between' ,paddingRight:"50px",paddingLeft:"50px" }}>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <div className='headernav'>
        <NavItem><Link to="/" className="nav-link"  style={{ color:"white",paddingRight:"20px" }}>Home</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link" style={{ color:"white"}}>About</Link></NavItem>
         </div>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
   
    )
  }
}

export default Header;
