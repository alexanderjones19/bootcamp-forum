import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Education from "./Education";
import Experience from "./Experience";
import ProfileActions from "./ProfileActions";
// import AddEducation from "../add-credentials/AddEducation";
// import AddExperience from "../add-credentials/AddExperience";
// import EditProfile from "../edit-profile/EditProfile";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const { profile } = this.props.profile;

    return (
      <div className="account">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4">Account Portal</h1>
              <div>
                <ProfileActions />
                <Experience experience={profile.experience} />
                <Education education={profile.education} />
                {/* nav tabs form select */}
                {/* <nav>
                  <div className="nav nav-pills" id="nav-tab" role="tablist">
                    <a
                      className="nav-item nav-link active"
                      id="nav-personal-tab"
                      data-toggle="tab"
                      href="#personal-tab"
                      role="tab"
                      aria-controls="nav-personal"
                      aria-selected="true"
                    >
                      Personal Info
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-education-tab"
                      data-toggle="tab"
                      href="#education-tab"
                      role="tab"
                      aria-controls="nav-education"
                      aria-selected="false"
                    >
                      Education
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-experience-tab"
                      data-toggle="tab"
                      href="#nav-experience"
                      role="tab"
                      aria-controls="nav-experience"
                      aria-selected="false"
                    >
                      Experience
                    </a>
                  </div>
                </nav> */}
                {/* <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="personal-tab"
                    role="tabpanel"
                    aria-labelledby="personal-tab"
                  >
                    <EditProfile />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="education-tab"
                  >
                    <AddEducation />
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="experience-tab"
                  >
                    <AddExperience />
                  </div>
                </div> */}
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
