import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Education from "./Education";
import Experience from "./Experience";
import ProfileItem from "../profiles/ProfileItem";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import AddEducation from "../add-credentials/AddEducation";
import AddExperience from "../add-credentials/AddExperience";
import EditProfile from "../edit-profile/EditProfile";

class Account extends Component {
  constructor(props) {
    super(props);
    // this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      displaySocialInputs: false,
      handle: "",
      bootcamp: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      experience: {},
      education: {},
      githubusername: "",
      bio: "",
      stackoverflow: "",
      linkedin: "",
      facebook: "",
      github: "",
      errors: {}
    };
  }

  componentDidMount = () => {
    this.props.getCurrentProfile();
  };

  onDeleteClick = e => {
    this.props.deleteAccount();
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    const { profile } = this.props.profile;

    return (
      <div className="account">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4">Account Portal</h1>
              <div>
                {/* <ProfileActions /> */}
                <ProfileItem profile={profile} />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                {/* <Link
                  to="/dashboard"
                  className="btn btn-lg btn-info d-flex my-4 text-white"
                >
                  Manage Dashboard View Preferences
                </Link> */}
              </div>
            </div>

            <div className="col-md-5 col-sm-12 px-0 mx-0">
              {/* nav tabs form select */}
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Personal Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Education
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "3"
                    })}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    Experience
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Row>
                    <Col sm="12">
                      <EditProfile />
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="2">
                  <Row>
                    <Col sm="12">
                      <AddEducation />
                    </Col>
                  </Row>
                </TabPane>

                <TabPane tabId="3">
                  <Row>
                    <Col sm="12">
                      <AddExperience />
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </div>
          </div>
          <div style={{ marginBottom: "60px" }} />
          <hr />
          <button
            onClick={this.onDeleteClick.bind(this)}
            className="btn btn-danger"
          >
            Delete My Account
          </button>
        </div>
      </div>
    );
  }
}

Account.proptypes = {
  deleteAccount: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { deleteAccount, getCurrentProfile }
)(withRouter(Account));
