import React from 'react';
import { NavLink, Card, CardHeader, CardText, CardBody } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

let postStyle = {
  marginTop: 8
}

const Post = (props) => {
  let discussionTitleClick = (event) => {
    // event.preventDefault();
    props.getOneDiscussion(props.id);
  };
  console.log('props', props);
  return (
    <Card style={postStyle}>
      <CardBody>
        <NavLink to={`/forum/discussion/${props.discussion.forum.forum_slug}/${props.discussion.discussion_slug}/${props.id}`} onClick={discussionTitleClick} tag={RRNavLink}>
          <h5>{props.discussion.title}</h5>
        </NavLink>
        <blockquote className="blockquote mb-0">
          <footer className="blockquote-footer">{props.discussion.user.name}</footer>
        </blockquote>
      </CardBody>
    </Card>
  )
}

export default Post;