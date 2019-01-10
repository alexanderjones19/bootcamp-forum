import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import DiscussionPost from './components/DiscussionPost';
import CreatePost from './components/CreatePost';

let commonmark = require('commonmark');

class Forum extends Component {
  state = {
    title: "",
    description: "",
    category: ""
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
      console.log(this.state.description);
      console.log(writer.render(parsed));
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
                render={(props) => <DiscussionPost {...props} />} 
              />
              <Route 
                exact path="/discussion/:type/new" 
                render={
                  (props) => <CreatePost 
                              {...props} 
                              handlePostSubmit={this.handlePostSubmit}
                              handleInputChange={this.handleInputChange}/>} 
                              />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Forum;