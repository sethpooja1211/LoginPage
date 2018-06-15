import React from 'react'
import { Component, PropTypes } from 'react'

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state={
      enable:true,
      errorMessage:'',
      username:'',
      pass:'',
      loading:false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
   render () {
     const enableButton = this.state.enable;
     const msg = this.state.errorMessage;
      return (
         <div className="container">
            <form className="form-horizontal" action="#" onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group"><h1>Login Page</h1></div>
                <div className="form-group">
                  <label  className="col-sm-2 control-label">User Name</label>
                  <div className="col-sm-8">
                    <input type="text" name="username" className="form-control" pattern="^[a-zA-Z0-9\s]+$" ref={node => { this.login = node }} onChange={(e)=>this.handleChange(e)} />
                  </div>
                </div>
                <div className="form-group">
                  <label  className="col-sm-2 control-label">Password</label>
                  <div className="col-sm-8">
                    <input type="password" name="password" className="form-control" pattern="^[a-zA-Z0-9\s]+$" ref={node => { this.password = node }} onChange={(e)=>this.handleChange(e)}/>
                  </div>
                </div>
                <div className="form-group"><h4>{this.state.loading ? 'Loading...': null}</h4></div>
                <div className="form-group">
                  <div className="col-sm-offset-2 col-sm-10">
                    <input type="submit" className="btn btn-default" value="Login" disabled={(this.state.username && this.state.password) ? false : true}/>
                  </div>
                </div>
            </form>
         </div>
      )
   }

   handleSubmit(e) {
      debugger;
      this.props.onSubmit(this.login.value, this.password.value);
      this.setState({loading:true});
   }
  handleChange(e){
    debugger;
    let state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  }

  LoginForm.propTypes = {
     onSubmit: PropTypes.func.isRequired
  };

export default LoginForm;
