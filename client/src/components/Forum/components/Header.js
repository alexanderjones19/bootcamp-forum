import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

// this makes sure it gives the user a one page application experience
import { NavLink as RRNavLink } from 'react-router-dom';


class Header extends Component{

  render() {
  return (
    <Nav pills>
      <NavItem>  
        {window.location.pathname === '/discussion/general' ? 
          <NavLink to="/discussion/general" tag={RRNavLink} active>General</NavLink> :
          <NavLink to="/discussion/general" tag={RRNavLink}>General</NavLink>
        }
      </NavItem>
      <NavItem>
        {window.location.pathname === "/discussion/code" ?
          <NavLink to="/discussion/code" tag={RRNavLink} active>Code</NavLink> : 
          <NavLink to="/discussion/code" tag={RRNavLink}>Code</NavLink> 
        }
      </NavItem>
      <NavItem>
        {window.location.pathname === "/discussion/bootcamp" ?
          <NavLink to="/discussion/bootcamp" tag={RRNavLink} active>Bootcamp</NavLink> : 
          <NavLink to="/discussion/bootcamp" tag={RRNavLink}>Bootcamp</NavLink> 
        }
      </NavItem>
    </Nav>
  )
  }
}

export default Header;