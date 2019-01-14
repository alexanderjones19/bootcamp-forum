import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, CardText } from 'reactstrap';
import slugify from '../../../utils/slugify';
import { handleInputChange, handleDiscussionSubmit } from '../../../actions/forumActions';

class CreatePost extends Component {

  // let commonmark = require('commonmark');

  onSubmit = (event) => {
    event.preventDefault();
    // let reader = new commonmark.Parser();
    // let writer = new commonmark.HtmlRenderer();
    // let parsedContent = reader.parse(props.forumData.content);
    let discussionBody = {
      forum: this.props.currentForum._id,
      discussion_slug: slugify(this.props.newDiscussionData.title),
      user: this.props.userId,
      title: this.props.newDiscussionData.title,
      content: this.props.newDiscussionData.content
    };
    this.props.handleDiscussionSubmit(discussionBody);
  }

  render() {
    return (
      <div>
        <br />
        <Card>
          <CardBody>
            <CardText>
              This forum supports Markdown text format. In the content of your post you can enter code or lists utilizing the Markdown text format.
            </CardText>
            <Form>
              <FormGroup>
                <Label for="txtTitle">Title</Label>
                <Input type="text" name="title" id="txtTitle" onChange={this.props.handleInputChange} />
              </FormGroup>
              <FormGroup>
                <Label for="txtContent">Content</Label>
                <Input type="textarea" name="content" id="txtContent" onChange={this.props.handleInputChange} />
              </FormGroup>
              {
                this.props.newDiscussionData.title && this.props.newDiscussionData.content ?
                <Button outline color="primary" onClick={this.onSubmit} >Post</Button> :
                <Button outline color="primary" onClick={this.onSubmit} disabled >Post</Button>
              }
            </Form>
          </CardBody>
        </Card>
      </div>
    )
  }  
}

const mapStateToProps = state => ({
  newDiscussionData: state.forum.newDiscussionForm,
  userId: state.auth.user.id,
  currentForum: state.forum.currentForum
});

const mapDispatchToProps = {
  handleInputChange,
  handleDiscussionSubmit
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePost);