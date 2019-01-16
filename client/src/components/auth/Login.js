import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount = () => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="d-none d-md-block col-md-4">
              <div className="card">
                <div className="card-img-top">
                  <img
                    src={require("../../img/binaryBabe.jpg")}
                    alt="login"
                    className="src"
                  />
                </div>
                <div className="card-body">
                  <p className="lead">
                    Get authorized using the email and password your provided on
                    registration. Then, you'll have access to the greatest
                    resource for boot camp students since StackOverflow
                  </p>
                </div>
                <div className="card-footer text-center p-2">
                  <Link to="/" className="mx-3">
                    <small>Terms of Service</small>
                  </Link>
                  <Link to="/" className="mx-3">
                    <small>Privacy Policy</small>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4">Welcome!</h1>
              <h1 className="display-4">Sign in to view your account</h1>
              <hr />
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
