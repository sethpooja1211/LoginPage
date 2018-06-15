import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { loginAction } from '../actions/loginAction'
import LoginForm from '../components/LoginForm'
import {browserHistory } from 'react-router'
import {localStorage} from 'localStorage'

class LoginApp extends React.Component {

   constructor(props){
     super(props)
     this.state={
       islodding:false
      }
    }

    componentDidMount(){
      if(window.localStorage.getItem('isLoggedIn')=="true"){
        browserHistory.push('/foo');
      }
    }

   componentWillReceiveProps(newProps){
     if(newProps.isLoggedIn==true){
       this.state.isLoggedIn = newProps.isLoggedIn;
       window.localStorage.setItem('isLoggedIn',true);
       browserHistory.push('/foo');
     }
   }

   render () {
      const { dispatch } = this.props;
      return (
         <div>
          {((window.localStorage.getItem('isLoggedIn')) == true )? null:
            <LoginForm onSubmit={(id, pass) =>
               dispatch(loginAction(id, pass))
            } />
          }
         </div>
      )
   }
}

const mapStateToProps = (state) => {
  debugger
   return {
    isLoggedIn:state.userLogin.isLoggedIn,
    username:state.loggedInData
   }
};

export default connect(mapStateToProps)(LoginApp);
