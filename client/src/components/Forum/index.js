import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import General from './components/General';
import Code from './components/Code';
import Bootcamp from './components/Bootcamp';
import CreatePost from './components/CreatePost';

class Forum extends Component {

  render() {
    return ( 
      <div className="container">
        
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/discussion/general" component={ General }/>
              <Route exact path="/discussion/code" component={ Code } />
              <Route exact path="/discussion/bootcamp" component={ Bootcamp } />
              <Route exact path="/discussion/:type/new" component={ CreatePost } />
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Forum;