import React, { Component } from "react";
import {connect} from "react-redux";
import {register} from "./../../actions/register.action"
class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  showError = ()=>{
    return <span>Error</span>
  }
//   onClickRegister = () => {
//     //let data = { username: "admin", password: "LTE" };
//    httpClient.post(server.REGISTER_URL,this.state).then(result=>{
//     alert(JSON.stringify(result.data))
//    })
// };

  render() {
    return (
      <div className="login-box">
      <div className="login-logo">
        <a href="../../index2.html">
          <b>Dojeed</b>Register
        </a>
      </div>
      {/* /.login-logo */}
      <div 
      style={{background: "whitesmoke", borderRadius: 10}}
      className="login-box-body">
        <p className="login-box-msg">register to new account</p>
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
          {/* Register */}
          {this.props.registerReducer.isError && this.showError()}

          <div className="row">
            <div className="col-xs-12">
              <button
                onClick={(e)=>{
                  e.preventDefault( )
                  this.props.register(this.props.history,this.state)
                }
                  }
                type="submit"
                className="btn btn-primary btn-block btn-flat"
              >
                Register
              </button>
            </div>
            {/* /.col */}
          </div>

         {/* Cancel */}
         <div className="row">
            <div className="col-xs-12">
              <button
              onClick={(e)=>
              {
                e.preventDefault();
                this.props.history.goBack()
              }  
              }
                style={{marginTop: 8}}
                className="btn btn-block btn-default"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* /.login-box-body */}
    </div>
 );
  }
}

// export default Register;
const mapStateToProps = ({registerReducer}) => ({
  registerReducer
})

const mapDispatchToProps = {
  register
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)