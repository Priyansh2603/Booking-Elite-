import React, { Component } from 'react';
import fire from './fire';
import Login from './Login';
import Home from './Home';
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
    fire.auth().onAuthStateChanged((user)=>{
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
        {this.state.user ? (<Home user={this.user}/>) : (<Login/>)}
      </div>
    );
  }
}

export default LoginApp;