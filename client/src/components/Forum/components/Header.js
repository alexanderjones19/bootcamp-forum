import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux';
import { getOneForum } from '../../../actions/forumActions';
// this makes sure it gives the user a one page application experience
import { NavLink as RRNavlink } from 'react-router-dom';

class Header extends Component {
  componentDidMount() {
    // console.log('pathname substring', window.location.pathname.substring(7));
    // this.props.getOneForum(window.location.pathname.substring(7));
  }

  componentDidUpdate(nextProps) {
    // if (nextProps.match.params.type !== this.props.match.params.type) {
    //   this.props.getOneForum(this.props.match.params.type);
    // }
    // this.props.getOneForum(window.location.pathname.substring(7));
  }

  render() {
    return (
      <Nav pills>
        {this.props.forums.map(forum => (
          <NavItem
          key={forum._id}
          id={forum._id}
          >
            {window.location.pathname === `/forum/${forum.forum_slug}` ?
              <NavLink to={`/forum/${forum.forum_slug}`} tag={RRNavlink} active>{forum.forum_name}</NavLink> :
              <NavLink to={`/forum/${forum.forum_slug}`} tag={RRNavlink}>{forum.forum_name}</NavLink>
            }
          </NavItem>
        ))}
      </Nav>
    )
  }
}

const mapDispatchToProps = {
  getOneForum
}

const mapStateToProps = state => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
