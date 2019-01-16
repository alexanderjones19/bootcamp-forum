import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { clearCurrentProfile } from "../../actions/profileActions";

class Navbar extends Component {
  onLogoutClick = event => {
    event.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    // Links visible when logged in
    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <button
            href="#"
            onClick={this.onLogoutClick}
            className="nav-link btn bg-none"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="rounded-circle"
              style={{ width: "25px", marginRight: "5px" }}
              title="Connect a Gravatar-enabled email address to use an avatar"
            />
            &nbsp;Logout
          </button>
        </li>
      </ul>
    );

    // Links visible for public
    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      // Navbar
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top mb-4 py-0 my-0">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/">
            <img
              src={require("../../img/BootCampBoosterLogoSquare.png")}
              alt="logo"
              id="navbarLogo"
              className="navbar-brand"
            />
          </Link>
          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  DASHBOARD
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profiles">
                  {" "}
                  MEMBERS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/forum">
                  FORUM
                </Link>
              </li>
            </ul>
          </div>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
