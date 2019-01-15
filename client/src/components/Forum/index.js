import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import DiscussionPost from './components/DiscussionPost';
import CreatePost from './components/CreatePost';
import discussion from './discussion.json';
import ViewPost from './components/ViewPost';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

let commonmark = require('commonmark');

class Forum extends Component {
  state = {
    title: "",
    description: "",
    category: "",
    discussion: discussion,
    modal: false
  }

  viewCheatSheet = () => {
    this.setState({
      modal: false
    })
  }

  closeCheatSheet = () => {
    this.setState({
      modal: true
    })
  }

  toggle = () => {
    if(this.state.modal) {
      this.viewCheatSheet();
    } else {
      this.closeCheatSheet();
    }

    console.log(this.state.modal)
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      category: window.location.pathname.split('/')[2]
    });
  }

  handlePostSubmit = event => {
    event.preventDefault();
    let reader = new commonmark.Parser();
    let writer = new commonmark.HtmlRenderer();

    if(this.state.title && this.state.description) {
      let parsed = reader.parse(this.state.description)
      let newDiscussion = this.state.discussion.slice();

      newDiscussion.push({
        userName: "test",
        userImage: "...",
        postTitle: this.state.title,
        postDescription: this.state.description,
        postCategory: this.state.category,
        postId: 5
      });

      this.setState({
        discussion: newDiscussion
      });
    }
  }

  render() {
    return ( 
      <div className="container">

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Markdown Cheat Sheet</ModalHeader>
          <ModalBody>
          <p>To display code/list/headers you must enclose your text in the following format:</p>
          <h5>Code:</h5>
            <pre>
              <code>
                ```javascript <br />
                &emsp;//code here <br />
                ```              
              </code>
            </pre>          
            <h5>Headers: </h5>
            <pre>
              <code>
                # is equivalent to {'<h1>'} tag <br />
                ## is equivalent to {'<h2>'} tag <br />
                ###### is equivalent to {'<h6>'} tag
              </code>
            </pre>

            <h5>Emphasis</h5>
            <pre>
              <code>
                *This text will be italic* <br />
                _This will also be italic_ <br />
                **This text will be bold** <br />
                __This will also be bold__ <br />
                *You **can** combine them* 
              </code>
            </pre>

            <h5>Lists</h5>
            <p>Unordered</p>
            <pre>
              <code>
                * Item 1 <br />
                * Item 2 <br />
                &emsp;* Item 2a <br />
                &emsp;* Item 2b 
              </code>
            </pre>

            <p>Ordered</p>
            <pre>
              <code>
                1. Item 1 <br />
                2. Item 2 <br />
                3. Item 3 <br />
                &emsp;* Item 3a <br />
                &emsp;* Item 3b 
              </code>
            </pre>
          </ModalBody>
          <ModalFooter>
            <Button color="warning" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>

        <Router>
          <div>
            <Header />
            <Switch>
              <Route 
                exact path="/discussion/:type"
                render={(props) => <DiscussionPost {...props} discussion={this.state.discussion} />} 
              />
              <Route 
                exact path="/discussion/:type/new" 
                render={
                  (props) => <CreatePost 
                              {...props} 
                              displayCheatSheet={this.toggle}
                              handlePostSubmit={this.handlePostSubmit}
                              handleInputChange={this.handleInputChange}/>} 
                              />
              <Route 
                exact path="/discussion/:type/:id" 
                render={props => <ViewPost 
                              {...props} 
                              displayCheatSheet={this.toggle}
                              discussion={this.state.discussion} /> }
              />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Forum;