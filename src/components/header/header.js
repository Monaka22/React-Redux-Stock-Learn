import React, { Component } from "react";
import { server } from "../../constants";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <header className="main-header">
        {/* Logo */}
        <a href="#" className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>D</b>JD
          </span>
          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>Do</b>JEED
          </span>
        </a>
        {/* Header Navbar: style can be found in header.less */}
        <nav className="navbar navbar-static-top">
          {/* Sidebar toggle button*/}
          <a
            href="#"
            className="sidebar-toggle"
            data-toggle="push-menu"
            role="button"
          >
            <span className="sr-only">Toggle navigation</span>
          </a>
          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* User Account: style can be found in dropdown.less */}
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="images/D-eQlCpU8AAwNnq.jpg"
                    className="user-image"
                    alt="User Image"
                  />
                  <span className="hidden-xs">Dojeed</span>
                </a>
                <ul className="dropdown-menu">
                  {/* User image */}
                  <li className="user-header">
                    <img
                      src="images/D-eQlCpU8AAwNnq.jpg"
                      className="img-circle"
                      alt="User Image"
                    />
                    <p>
                      Dojeed - Web Developer
                      <small>Member since Jan. 2019</small>
                    </p>
                  </li>
                  {/* Menu Footer*/}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="#" className="btn btn-default btn-flat">
                        Profile
                      </a>
                    </div>
                    <div
                      className="pull-right"
                      onClick={() => {
                        this.props.history.push("/login");
                        localStorage.removeItem(server.LOGIN_PASSED);
                        this.props.appReducer.app.forceUpdate();
                      }}
                    >
                      <a href="#" className="btn btn-default btn-flat">
                        Sign out
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({
  appReducer
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));
