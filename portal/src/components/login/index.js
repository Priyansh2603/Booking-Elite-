import React, { Component } from 'react';
import fire from './fire';
import Login from './Login';
import Home from './Home';
import Registration from './Registration'
import { getAuth, onAuthStateChanged } from "firebase/auth"
const auth = getAuth(fire)
class LoginApp extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    auth.onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
    return (
      <div>
        {this.state.user ? (<Registration/>) : (<Login/>)}
      </div>
    );
  }
}

export default LoginApp;