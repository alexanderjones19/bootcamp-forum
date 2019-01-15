import React from 'react';
import { Button, Media, Card, CardBody, CardTitle, CardText, CardFooter, CardHeader } from 'reactstrap';

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
        <Card >
          <CardHeader>
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
          </CardHeader>        
        <CardBody>
          <h4><CardTitle>{post.postTitle}</CardTitle></h4>
          <CardText>{post.postDescription}</CardText>
          <CardText>{post.postContent}</CardText>
        </CardBody>
        <CardFooter>
          <Button color="primary">Reply</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ViewPost;