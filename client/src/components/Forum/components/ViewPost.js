import React, { Component } from 'react';
import { Media, Card, CardBody, CardHeader, CardFooter, Button, CardTitle, CardText } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { getOneDiscussion, toggleReplyForm, getAllReplies } from '../../../actions/forumActions';
import Prism from 'prismjs';
import '../css/prism.css';
import CreateReply from './CreateReply';

const commonmark = require('commonmark');

const userLogo = {
  width: 60,
  borderRadius: "100%",
  marginBottom: 10,
  marginRight: 10
};

const userName = {
  marginTop: 5,
  color: "white"
};

class ViewPost extends Component {
  componentDidMount() {
    if (!this.props.forum.currentDiscussion._id) {
      this.props.getOneDiscussion(this.props.match.params.discussionid);
      this.props.getAllReplies(this.props.match.params.discussionid);
    } else {
      this.props.getAllReplies(this.props.match.params.discussionid);
    }
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  displayTextArea = () => {
    if (this.props.forum.isReplying) {
      return <CreateReply
        handleReplyInputChange={this.props.handleReplyInputChange}
        handlePostReply={this.props.handlePostReply}
        />
    }
    else {
      return
    }
  }

  convertMarkDownToHtml = text => {
    let reader = new commonmark.Parser();
    let writer = new commonmark.HtmlRenderer();

    let parsed = reader.parse(text);
    let result = writer.render(parsed);

    return result;
  };

  render() {
    if (!this.props.forum.currentDiscussion._id) {
      return <h1>Loading . . .</h1>
    }
    else {
      return (
        <div className="mt-3">
          <Card>
            <CardHeader>
              <Media>
                <Media left href="#">
                  <Media object src={this.props.userAvatar} style={userLogo} />
                </Media>
                <Media body>
                  <Media heading>
                    <Media href="#" style={userName}>
                      {this.props.forum.currentDiscussion.user.name}
                    </Media>
                  </Media>
                </Media>
              </Media>
            </CardHeader>
            <CardBody>
              <h4>
                <CardTitle>{this.props.forum.currentDiscussion.title}</CardTitle>
              </h4>
              {ReactHtmlParser(
                this.convertMarkDownToHtml(
                  this.props.forum.currentDiscussion.content
                )
              )}
              {/* {this.props.currentDiscussion.content} */}
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={this.props.toggleReplyForm}>Reply</Button>
            </CardFooter>
          </Card>
          {this.displayTextArea()}
          {this.props.forum.replies.map(reply => (
            <Card key={reply._id} id={reply._id} className="mt-3">
              <CardBody>
                <blockquote className="blockquote mb-0">
                  {ReactHtmlParser(this.convertMarkDownToHtml(reply.reply))}
                  <footer className="blockquote-footer">{reply.user.name}</footer>
                </blockquote>
              </CardBody>
            </Card>
          ))}
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  newDiscussionData: state.forum.newDiscussionForm,
  // user name
  userAvatar: state.auth.user.avatar,
  forum: state.forum,
  // currentForum: state.forum.currentForum,
  currentDiscussion: state.forum.currentDiscussion
});

const mapDispatchToProps = {
  getAllReplies,
  // handlePostReply,
  toggleReplyForm,
  getOneDiscussion,
  // handleReplyInputChange
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPost);
