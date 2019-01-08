import React from 'react';
import Post from './Post';

import { Button } from 'reactstrap';

const Bootcamp = () => {
  return (
    <div> 
      <h3 className="mt-3 mb-3">This is a bootcamp forum. Post/Answer any questions</h3>
      <Button outline color="primary">New Question</Button>
      <div className="mt-3">
        <Post 
          userName="Potato"
          userImage="https://pbs.twimg.com/profile_images/737814583469998085/FUbqnArk_400x400.jpg"
          postDescription="This is an example post!!!"
        />
        <Post 
          userName="Potato"
          userImage="https://pbs.twimg.com/profile_images/737814583469998085/FUbqnArk_400x400.jpg"
          postDescription="This is an example post!!!"
        />
      </div>
    </div>    
  )
}

export default Bootcamp;