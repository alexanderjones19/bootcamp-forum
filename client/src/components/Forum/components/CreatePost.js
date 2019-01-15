import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardBody, Button, Form, FormGroup, Label, Input, CardText } from 'reactstrap';
import slugify from '../../../utils/slugify';
import { handleInputChange, handleDiscussionSubmit } from '../../../actions/forumActions';

class CreatePost extends Component {

  onSubmit = (event) => {
    event.preventDefault();
    let discussionBody = {
      forum: this.props.currentForum._id,
      discussion_slug: slugify(this.props.newDiscussionData.title),
      user: this.props.userId,
      title: this.props.newDiscussionData.title,
      content: this.props.newDiscussionData.content
    };
    this.props.handleDiscussionSubmit(discussionBody)
      .then(data => {
        this.props.history.push(`/discussion/${data.forum.forum_slug}/${data.discussion_slug}/${data._id}`);
      });
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
                <Input type="textarea" name="content" id="txtContent" rows={15} onChange={this.props.handleInputChange} />
              </FormGroup>
                <Button outline color="primary" onClick={this.onSubmit} disabled={this.props.newDiscussionData.title.trim() === '' || this.props.newDiscussionData.content.trim() === ''} >Post</Button>
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