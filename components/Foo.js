import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import { logoutAction } from '../actions/loginAction'
import {browserHistory } from 'react-router'
import {localStorage} from 'localStorage'
import Home from '../components/Home'


class Foo extends React.Component {
   constructor(props){
     super(props)
     this.handleClick = this.handleClick.bind(this);
   }

  componentDidMount(){
    if(window.localStorage.getItem('isLoggedIn')=="false"){
       browserHistory.push('/LoginApp');
    }
  }

   componentWillReceiveProps(newProps){
     debugger;
     if( window.localStorage.getItem('isLoggedIn')==false){
        window.localStorage.setItem('isLoggedIn',"false");
        browserHistory.push('/LoginApp');
     }
   }

   render(){
     return (
      <div className="container">
         <div className="col-md-12"><h2>Welcome Back</h2></div>
         <div className="col-md-12"><Home /></div>
         <div className="col-md-12"><strong>I am Foo! Ready to eat.</strong></div>
         <div className="form-group"></div><br/>
         <input type="submit" className="btn btn-default" value="Logout" onClick={(e)=>this.handleClick(e)} />
       </div>
     )
   }

   handleClick(e){
     e.preventDefault();
     debugger;
     this.props.dispatch(logoutAction());
     window.localStorage.setItem('isLoggedIn',"false");
     browserHistory.push('/LoginApp');
   }
}

function mapStateToProps(state){
  //console.log("FOO  mapStateToProps : " + state.userLogin.isLoggedIn);
  debugger;
  return{
    isLoggedIn:state.userLogin.isLoggedIn
  }
}

export default connect(mapStateToProps)(Foo)
