import React, {Component} from 'react';
import { Button, Media, Card, CardBody, CardTitle, CardText, CardFooter, CardHeader } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Prism from 'prismjs';
import '../../../prism.css';
import CreateReply from './CreateReply';

let commonmark = require('commonmark');

const userLogo = {
  width: 60,
  borderRadius: '100%',
  marginBottom: 10,
  marginRight: 10
}

const userName = {
  marginTop: 5
}

const convertMarkDown = text => {
  let reader = new commonmark.Parser();
  let writer = new commonmark.HtmlRenderer();

  let parsed = reader.parse(text);
  let result = writer.render(parsed);

  return result;
}

class ViewPost extends Component {
  state = {
    isReplying: false
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  handleReply = () => {
    this.setState({
      isReplying: true
    })
  }

  handlePostReply = () => {
    this.setState({
      isReplying: false
    })
  }

  displayTextArea = () => {
    if(this.state.isReplying) {
      return <CreateReply handleReply={this.handlePostReply}/>
    } else {
      return 
    }
  }

  render(){
  let post = this.props.discussion[this.props.match.params.id - 1];
    // {console.log(this.props)}
    return (
      <div className="mt-3 mb-5">
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
            {ReactHtmlParser(convertMarkDown(post.postContent))}
          </CardBody>
          <CardFooter>
            <Button color="primary" onClick={this.handleReply}>Reply</Button>
          </CardFooter>
        </Card>
        {this.displayTextArea()}
        {/* user reply example: */}
        <Card className="mt-3">
          <CardBody>
            <blockquote className="blockquote mb-0">
              <CardText>This is where the user will respond</CardText>
              <footer className="blockquote-footer">User name</footer>
            </blockquote>
          </CardBody>
        </Card>
        <Card className="mt-3">
          <CardBody>
            <blockquote className="blockquote mb-0">
              <CardText>This is where the user will respond</CardText>
              <footer className="blockquote-footer">User name</footer>
            </blockquote>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ViewPost;