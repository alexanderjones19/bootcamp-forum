import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';



class Header extends Component{

  render() {
  return (
    <Nav pills>
      <NavItem>  
        {window.location.pathname === '/discussion/general' ? 
          <NavLink href="/discussion/general" active>General</NavLink> :
          <NavLink href="/discussion/general">General</NavLink>
        }
      </NavItem>
      <NavItem>
        {window.location.pathname === "/discussion/code" ?
          <NavLink href="/discussion/code" active>Code</NavLink> : 
          <NavLink href="/discussion/code">Code</NavLink> 
        }
      </NavItem>
      <NavItem>
        {window.location.pathname === "/discussion/bootcamp" ?
          <NavLink href="/discussion/bootcamp" active>Bootcamp</NavLink> : 
          <NavLink href="/discussion/bootcamp">Bootcamp</NavLink> 
        }
      </NavItem>
    </Nav>
  )
  }
}

export default Header;