import React from 'react';

let postType = null;

const displayPostType = props => {
  switch(props.match.params.type){
    case 'general':
      postType = 'general';
      return <h3>Create a new general post</h3>;
    case 'code':
      postType = 'code';
      return <h3>Create a new code post</h3>;
    case 'bootcamp':
      postType = 'bootcamp';
      return <h3>Create a new bootcamp post</h3>
  }
}

const CreatePost = props => {
  return (
    <div> {console.log(props.match.params.type)}
      {displayPostType(props)}
    </div>
  )
}

export default CreatePost;