import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/keyAction";
import { Redirect } from "react-router-dom";

class Keylogin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };

  componentDidUpdate(prevProps) {
    if (this.props.superVisorAuthState !== prevProps.superVisorAuthState) {
      if (this.props.superVisorAuthState.length) {
        this.props.history.push("/superVisor");
      }
    }
  }

  render() {
    const { authError, auth } = this.props;
    // if (auth.uid) return <Redirect to="/Keylogin" />;
    return (
      <div className="container">
        <div className="login-header my-5">
          <h1> Key Role Login</h1>
        </div>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={this.handleChange}
              value={this.state.email}
              placeholder="Enter email"
              style={{ width: "400px" }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              placeholder="Password"
              style={{ width: "400px" }}
            />
          </div>
          {authError ? (
            <div className="text-danger my-2">{authError}</div>
          ) : null}
          <button type="submit" className="btn btn-dark">
            sign in <i class="fas fa-sign-in-alt" />
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
  auth: state.firebase.auth,
  superVisorAuthState: state.auth.superVisorAuth,
});

export default connect(mapStateToProps, { signIn })(Keylogin);
