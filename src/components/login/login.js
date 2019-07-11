import React, { Component } from "react";
import {connect} from "react-redux";
import {login,autoLogin} from "./../../actions/login.action"

class Login extends Component {
  constructor(props) {
  super(props)

  this.state = {
     username:"",
     password:""
  }
}

componentDidMount(){
this.props.autoLogin(this.props.history);
}

showError = ()=>{
  return <span>Error</span>
}
  render() {
    return (
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Dojeed</b>Login
          </a>
        </div>
        {/* /.login-logo */}
        <div  style={{background: "whitesmoke", borderRadius: 10}}
      className="login-box-body">
          <p className="login-box-msg">Sign in to start your session</p>
          <span>{JSON.stringify(this.state)}</span>
          <form>
          <div className="form-group has-feedback">
            <input
              onChange={e=>this.setState({username: e.target.value})}
              name="username"
              type="text"
              className="form-control"
              placeholder="Email"
            />
            <span className="glyphicon glyphicon-envelope form-control-feedback" />
          </div>
          <div className="form-group has-feedback">
            <input
              onChange={e=>this.setState({password: e.target.value})}
              name="password"
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <span className="glyphicon glyphicon-lock form-control-feedback" />
          </div>
      <div className="row">
              {/* /.col */}
              <div className="col-xs-12">
              {this.props.loginReducer.isError ? this.showError() : null}
                <button
                onClick={e=>{
                  e.preventDefault();
                  this.props.login(this.props.history,this.state)
                }}
                  type="submit"
                  className="btn btn-primary btn-block btn-flat"
                >
                  Sign In
                </button>
              </div>
              {/* /.col */}
            </div>
            <div className="row">
              {/* /.col */}
              <div className="col-xs-12">
                <button
                  onClick={()=>{this.props.history.push('/register')}}
                  style={{marginTop:8}}
                  className="btn btn-block btn-default"
                >
                  Register
                </button>
              </div>
              {/* /.col */}
            </div>
  
          </form>
          <br />
        </div>
        {/* /.login-box-body */}
      </div>

);
  }
}
const mapStateToProps = ({loginReducer}) => ({ loginReducer })

const mapDispatchToProps = {
  login,autoLogin
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
