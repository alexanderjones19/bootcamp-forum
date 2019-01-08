import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import General from './components/General';
import Code from './components/Code';
import Bootcamp from './components/Bootcamp';

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
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

export default Forum;