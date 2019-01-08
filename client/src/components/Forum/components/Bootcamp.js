import React from 'react';
import Post from './Post';
import discussion from '../discussion.json';

import { Button } from 'reactstrap';

const Bootcamp = () => {
  return (
    <div> 
      <h3 className="mt-3 mb-3">This is a bootcamp forum. Post/Answer any questions</h3>
      <Button outline color="primary">New Question</Button>
      <div className="mt-3">
      {discussion.map(post => {
          if(post.postCategory === 'bootcamp') {
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

export default Bootcamp;