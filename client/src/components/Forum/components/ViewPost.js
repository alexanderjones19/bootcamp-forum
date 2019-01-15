import React, {Component} from 'react';
import { Button, Media, Card, CardBody, CardTitle, CardText, CardFooter, CardHeader } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';
import Prism from 'prismjs';
import '../../../prism.css';

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
  componentDidMount() {
    Prism.highlightAll();
  }

  render(){
  let post = this.props.discussion[this.props.match.params.id - 1];
    // {console.log(this.props)}
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
            {ReactHtmlParser(convertMarkDown(post.postContent))}
          </CardBody>
          <CardFooter>
            <Button color="primary">Reply</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default ViewPost;