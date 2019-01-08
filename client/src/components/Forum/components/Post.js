import React from 'react';
import { Media } from 'reactstrap';

const userImageStyle = {
  width: 70,
  marginRight: 5,
  marginTop: 5
}

const Post = (props) => {
  return ( 
    <Media>
      <Media left href="#">
        <Media style={userImageStyle} object src={props.userImage} alt="user image" />
      </Media>
      <Media body>
        <a href='#'>
          <Media heading href={props.userName}>{props.userName}</Media>
        </a>
        {props.postDescription}
      </Media>
    </Media>
  )
}

export default Post;