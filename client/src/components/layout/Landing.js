import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      // Landing Page
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="d-none d-md-block col-md-5">
                <div className="card card-body p-0">
                  <img
                    src={require("../../img/pantsPeople.jpg")}
                    alt="relatable"
                    id="pencilBiter"
                  />
                  <ul className="list-group list-group-flush text-dark">
                    <li className="list-group-item homeList lead">
                      Maximize your boot camp experience
                    </li>
                    <li className="list-group-item homeList lead">
                      Participate in code and camp discussions
                    </li>
                    <li className="list-group-item homeList lead">
                      Connect with the global community of developers
                    </li>
                    {/* <li className="list-group-item homeList lead">
                      Integrate with your class repository and calendar
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-7">
                <h1 id="homeTitle" className="display-3 mt-4">
                  BootCampBooster™
                </h1>
                <hr className="landingHr" />
                <p className="lead">
                  Discover your new hub for all things boot camp related. From
                  pre-camp questions to post-camp networking, BootCampBuster™ is
                  here to help make the most of your camp experience. Come on
                  in!
                </p>
                <hr className="landingHr" />
                {/* <h4 className="mb-4">
                  Maintained by your peers and professors,{" "}
                  <strong>BootCampBooster™ </strong>
                  combines the social, educational, and professional aspects of
                  coding boot camps in one progressive and welcoming
                  environment. Whether you're simply interested in coding, just
                  struggling to stay alive in your current camp, or already
                  working as a developer, BootCampBooster™ is the place for you.
                </h4>
                <hr className="landingHr" /> */}
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
