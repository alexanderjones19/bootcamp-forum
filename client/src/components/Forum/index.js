import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import DiscussionPost from './components/DiscussionPost';
import CreatePost from './components/CreatePost';

class Forum extends Component {
  state = {
    title: "",
    description: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handlePostSubmit = event => {
    event.preventDefault();
    if(this.state.title) {
      console.log(this.state);
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