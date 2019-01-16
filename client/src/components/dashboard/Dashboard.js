import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile, deleteAccount } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import Github from "./Github";
import TechNews from "./TechNews";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
  }

  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // dashboardContent = <h1>Hello Field</h1>;
      // check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = (
          <div>
            <p className="lead text-muted">
              Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
              <Link to="/account" className="btn btn-light ml-4">
                <i className="fas fa-user-circle text-info mr-1" />
                Manage Account
              </Link>
            </p>
            <hr />
            <div className="card-deck dashboard-cards">
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src={require("../../img/matrix.jpg")}
                  alt="matrix"
                /> */}
                <div className="card-header p-3 display-4">Tech News</div>
                <div className="card-body">
                  <TechNews />
                </div>
              </div>
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src={require("../../img/matrix.jpg")}
                  alt="matrix"
                /> */}
                <div className="card-header p-3 display-4">Job Board</div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                </div>
              </div>
              <div className="card">
                {/* <img
                  className="card-img-top"
                  src={require("../../img/matrix.jpg")}
                  alt="matrix"
                /> */}
                <div className="card-header p-3 display-4">My Repos</div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <Github github={profile.githubusername} />
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ marginBottom: "60px" }} />
          </div>
        );
      } else {
        // user is logged in but has no profile
        dashboardContent = (
          <div className="noProfileDashboard">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <p className="lead text-muted">Welcome {user.name} </p>
                  <p>
                    C'mon now {user.name}, you need to sharpen up your profile!
                  </p>
                  <Link to="/create-profile" className="btn btn-lg btn-success">
                    Create Profile
                  </Link>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <div className="card-columns">
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={require("../../img/matrix.jpg")}
                        alt="cardColumnImage"
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          Card title that wraps to a new line
                        </h5>
                        <p className="card-text">
                          This is a longer card with supporting text below as a
                          natural lead-in to additional content. This content is
                          a little bit longer.
                        </p>
                      </div>
                    </div>
                    <div className="card bg-info p-3 text-white">
                      <blockquote className="blockquote mb-0 card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                          <small className="text-muted">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </div>
                    <div className="card bg-info text-white text-center p-3">
                      <blockquote className="blockquote mb-0">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat.
                        </p>
                        <footer className="blockquote-footer">
                          <small>
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </div>
                    <div className="card">
                      <img
                        className="card-img-top"
                        src={require("../../img/matrix.jpg")}
                        alt="cardColumnImage"
                      />
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This card has supporting text below as a natural
                          lead-in to additional content.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="card text-center">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This card has supporting text below as a natural
                          lead-in to additional content.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="card">
                      <img
                        className="card-img"
                        src={require("../../img/matrix.jpg")}
                        alt="Cardimage"
                      />
                    </div>
                    <div className="card bg-info p-3 text-right text-white">
                      <blockquote className="blockquote mb-0">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante.
                        </p>
                        <footer className="blockquote-footer">
                          <small className="text-muted">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </small>
                        </footer>
                      </blockquote>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          This is a wider card with supporting text below as a
                          natural lead-in to additional content. This card has
                          even longer content than the first to show that equal
                          height action.
                        </p>
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
