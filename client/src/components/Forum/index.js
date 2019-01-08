import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import DiscussionPost from './components/DiscussionPost';
import CreatePost from './components/CreatePost';

class Forum extends Component {

  render() {
    return ( 
      <div className="container">
        
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/discussion/:type" component={ DiscussionPost }/>
              <Route exact path="/discussion/:type/new" component={ CreatePost } />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Forum;