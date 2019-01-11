import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import DiscussionPost from './components/DiscussionPost';
import CreatePost from './components/CreatePost';
import discussion from './discussion.json';
import ViewPost from './components/ViewPost';

let commonmark = require('commonmark');

class Forum extends Component {
  state = {
    title: "",
    description: "",
    category: "",
    discussion: discussion
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
                              handlePostSubmit={this.handlePostSubmit}
                              handleInputChange={this.handleInputChange}/>} 
                              />
              <Route 
                exact path="/discussion/:type/:id" 
                render={props => <ViewPost {...props} discussion={this.state.discussion} /> }
              />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Forum;