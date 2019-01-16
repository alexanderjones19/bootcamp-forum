import React, { Component } from 'react';
import { Media, Card, CardBody, CardHeader, CardFooter, Button, CardTitle } from 'reactstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { connect } from 'react-redux';
import { getOneDiscussion } from '../../../actions/forumActions';
import Prism from 'prismjs';

const userLogo = {
  width: 60,
  borderRadius: '100%',
  marginBottom: 10,
  marginRight: 10
};

const userName = {
  marginTop: 5
};

const commonmark = require('commonmark');

class ViewPost extends Component {
  componentDidMount() {
    console.log(this.props);
    if (!this.props.forum.currentDiscussion._id) {
      // this.props.getOneDiscussion()
    }
    Prism.highlightAll();
  }

  convertMarkDownToHtml = text => {
    let reader = new commonmark.Parser();
    let writer = new commonmark.HtmlRenderer();
  
    let parsed = reader.parse(text);
    let result = writer.render(parsed);
  
    return result;
  }

  render() {
    return(
      <div className="mt-3">
        <Card >
          <CardHeader>
            <Media>
              <Media left href="#">
                <Media object src={this.props.userAvatar} style={userLogo}/>
              </Media>
              <Media body>
                <Media heading>
                  <Media href="#" style={userName}>{this.props.forum.currentDiscussion.user.name}</Media>
                </Media>
              </Media>
            </Media>
          </CardHeader>        
          <CardBody>
            <h4><CardTitle>{this.props.forum.currentDiscussion.title}</CardTitle></h4>
            {ReactHtmlParser(this.convertMarkDownToHtml(this.props.forum.currentDiscussion.content))}
            {/* {this.props.currentDiscussion.content} */}
          </CardBody>
          <CardFooter>
            <Button color="primary">Reply</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}



const mapStateToProps = state => ({
  newDiscussionData: state.forum.newDiscussionForm,
  // user name
  userAvatar: state.auth.user.avatar,
  forum: state.forum
  // currentForum: state.forum.currentForum,
  // currentDiscussion: state.forum.currentDiscussion
});

const mapDispatchToProps = {
  // handleInputChange,
  // handleDiscussionSubmit,
  // getAllReplies,
  getOneDiscussion
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewPost);