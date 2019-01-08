import React from 'react';
import Post from './Post';
import discussion from '../discussion.json';

import { NavLink } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

const General = props => {
  return (
    <div> {console.log(props)}
      <h3 className="mt-3 mb-3">This is a general forum. Post/Answer any questions</h3>
      <NavLink className="btn btn-primary" to="/discussion/general/new" tag={RRNavLink}>New Question</NavLink>
      <div className="mt-3">
        {discussion.map(post => {
          if(post.postCategory === 'general') {
            return <Post 
              userName={post.userName}
              postId={post.id} 
              postTitle={post.postTitle}
              postDescription={post.postDescription} 
            />
          }
          return null
        })}
      </div>
    </div>    
  )
}

export default General;