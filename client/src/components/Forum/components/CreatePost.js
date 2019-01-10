import React from 'react';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, CardText } from 'reactstrap';

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
    <div> 
      {displayPostType(props)}
      <br />
      <Card>
        <CardBody>
          <CardText>
            This forum handle Markdown text format. Enter your post title then on your post description you may use Markdown to enter code or list to describe your issue.
          </CardText>
          <Form>
            <FormGroup>
              <Label for="txtTitle">Title</Label>
              <Input type="text" name="title" id="txtTitle" onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
              <Label for="txtDescription">Description</Label>
              <Input type="textarea" name="description" onChange={props.handleInputChange} id="txtDescription" />
            </FormGroup>
            <Button outline color="primary" onClick={props.handlePostSubmit}>Post</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  )
}

export default CreatePost;