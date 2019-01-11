import React from 'react';
import { Media, Card, CardBody, CardTitle, CardText } from 'reactstrap';

const userLogo = {
  width: 60,
  borderRadius: '100%',
  marginBottom: 10,
  marginRight: 10
}

const userName = {
  marginTop: 5
}

const ViewPost = props => {
  let post = props.discussion[props.match.params.id - 1];
  console.log(props)
  return (
    <div className="mt-3">
        <Media>
          <Media left href="#">
            <Media object src={post.userImage} style={userLogo}/>
          </Media>
          <Media body>
            <Media heading>
              <Media href="#" style={userName}>{post.userName}</Media>
            </Media>
          </Media>
        </Media>
        <Card >
        <CardBody>
          <h4><CardTitle>{post.postTitle}</CardTitle></h4>
          {/* Media part */}
          <CardText>{post.postDescription}</CardText>
          <CardText>{post.postContent}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default ViewPost;