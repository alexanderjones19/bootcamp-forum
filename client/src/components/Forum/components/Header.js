import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
// this makes sure it gives the user a one page application experience
import { NavLink as RRNavlink } from 'react-router-dom';

const Header = props => {
  console.log(props);
  return (
    <Nav pills>
      {props.forums.map(forum => (
        <NavItem
        key={forum._id}
        id={forum._id}
        >
          {window.location.pathname === `/forum/discussion/${forum.forum_slug}` ?
            <NavLink to={`/forum/discussion/${forum.forum_slug}`} tag={RRNavlink} active>{forum.forum_name}</NavLink> :
            <NavLink to={`/forum/discussion/${forum.forum_slug}`} tag={RRNavlink}>{forum.forum_name}</NavLink>
          }
        </NavItem>
      ))}
    </Nav>
  )
}

export default Header;
