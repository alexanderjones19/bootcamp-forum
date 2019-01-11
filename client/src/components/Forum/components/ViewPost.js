import React from 'react';

const ViewPost = props => {
  let post = props.discussion[props.match.params.id - 1];
  return (
    <div className="mt-3 card">
      <div className="card-body">
        <h2 className="card-title">{post.postTitle}</h2>
        <p>{post.postDescription}</p>
        <p>{post.postContent}</p>
      </div>
    </div>
  )
}

export default ViewPost;