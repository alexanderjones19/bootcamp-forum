import React from 'react';
import Post from './Post';
import discussion from '../discussion.json';

import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';


const DiscussionPost = props => {
  let currentDiscussion = props.match.params.type; 
  return (
    <div> 
      <h3 className="mt-3 mb-3">This is a {currentDiscussion} forum. Post/Answer any questions</h3>
      <NavLink className="btn btn-primary" to={`/discussion/${currentDiscussion}/new`} tag={RRNavLink}>New Question</NavLink>
      <div className="mt-3">
        {
          discussion.map(post => {
            if(post.postCategory === currentDiscussion) {
              return <Post 
                userName={post.userName}
                postId={post.id} 
                postTitle={post.postTitle}
                postDescription={post.postDescription} 
              />
            }
            return null
          })            
        }
      </div>
    </div>    
  )
}

export default DiscussionPost;