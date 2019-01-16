import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import { getAllForums, toggleCheatSheet } from '../../actions/forumActions';
import DiscussionPost from './components/DiscussionPost';
import CreatePost from './components/CreatePost';
import ViewPost from './components/ViewPost';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
 
class Forum extends Component {
  componentDidMount() {
    this.props.getAllForums();
  }

  componentDidUpdate() {
    // this.props.getOneForum(this.props.match.params.type);
  }

  render() {
    return (
      <div className="container">

        <Modal isOpen={this.props.forum.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggleCheatSheet}>Markdown Cheat Sheet</ModalHeader>
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
            <Button color="warning" onClick={this.props.toggleCheatSheet}>Close</Button>
          </ModalFooter>
        </Modal>

        <Router>
          <div>
            <Header 
              forums={this.props.forum.forums}
            />
            <Switch>
              <Route exact path="/forum/discussion/:type" component={ DiscussionPost }/>
              <Route exact path="/forum/discussion/:type/new" component={ CreatePost }/>
              <Route exact path="/forum/discussion/:type/:discussionslug/:discussionid" component={ ViewPost }/>
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getAllForums,
  toggleCheatSheet
}

const mapStateToProps = state => ({
  forum: state.forum
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forum);