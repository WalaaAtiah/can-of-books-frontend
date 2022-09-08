import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./header.css";
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';


class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;

    return (
     
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  style={{display:'flex',justifyContent:'space-between' ,paddingRight:"50px",paddingLeft:"50px" }}>
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <div className='headernav'>
        <NavItem><Link to="/" className="nav-link"  style={{ color:"white",paddingRight:"20px" }}>Home</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link" style={{ color:"white"}}>About</Link></NavItem>
        {isAuthenticated&&<NavItem><Link to="/Profile" className="nav-link" style={{ color:"white"}}>Profile</Link></NavItem>}

        <NavItem><LoginButton/></NavItem>
        <NavItem><LogoutButton/></NavItem>


         </div>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
   
    )
  }
}

export default withAuth0 (Header);
