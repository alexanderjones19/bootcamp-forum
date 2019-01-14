import React from 'react';
import { NavLink, Card, CardHeader, CardText, CardBody } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

let postStyle = {
  marginTop: 8
}

let headerStyle = {
  paddingTop: 2,
  paddingBottom: 0
}

const Post = (props) => {
  return (
    <Card style={postStyle}>
      <CardHeader style={headerStyle}><NavLink to='/' tag={RRNavLink}><h5>{props.discussion.title}</h5></NavLink></CardHeader>
      <CardBody>
        <blockquote className="blockquote mb-0">
          <CardText>{props.discussion.content}</CardText>
          <footer className="blockquote-footer">{props.discussion.user.name}</footer>
        </blockquote>
      </CardBody>
    </Card>
  )
}

export default Post;