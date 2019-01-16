import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Input, Button, CardBody, CardFooter } from 'reactstrap';
import { handleReplyInputChange, handlePostReply, getAllReplies } from '../../../actions/forumActions';

class CreateReply extends Component {

  componentDidMount() {
  }

  onSubmit = (event) => {
    event.preventDefault();
    let replyBody = {
      forum: this.props.currentForum._id,
      discussion: this.props.currentDiscussion._id,
      user: this.props.userId,
      reply: this.props.newReplyData.reply,
    };
    this.props.handlePostReply(replyBody)
      .then(data => {
        // this.props.history.push(`/discussion/${data.forum.forum_slug}/${data.discussion_slug}/${data._id}`);
        this.props.getAllReplies(this.props.currentDiscussion._id);
      });
  }

  render() {
    return (
      <Card className="mt-3">
        <CardBody>
          <Input type="textarea" name="reply" onChange={this.props.handleReplyInputChange} rows={4} />
        </CardBody>
        <CardFooter>
          <Button color="success" onClick={this.onSubmit} disabled={this.props.newReplyData.reply.trim() === ''}>Post</Button> {''}
          <Button color="info" onClick={this.props.displayCheatSheet}>View Markdown Cheat Sheet</Button>
        </CardFooter>
      </Card>
    )
  }
}

const mapStateToProps = state => ({
  newReplyData: state.forum.newReplyForm,
  userId: state.auth.user.id,
  currentForum: state.forum.currentForum,
  currentDiscussion: state.forum.currentDiscussion
});

const mapDispatchToProps = {
  handleReplyInputChange,
  handlePostReply,
  getAllReplies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReply);