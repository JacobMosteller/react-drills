import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      username:'',
      password:'',
    }


    this.updateUsername=this.updateUsername.bind(this)
    this.updatePassword=this.updatePassword.bind(this)
    this.login=this.login.bind(this)
  }

  updateUsername(event){
    this.setState({
      username:event.target.value
    })
  }
  updatePassword(event){
    this.setState({
      password:event.target.value
    })
  }
login(){
  alert(`Username: ${this.state.username} Password: ${this.state.password}`)
}


  render() {
    return (
      <div className="App">
        <input
        onChange={this.updateUsername}
        placeholder='username'/>
        <input
        onChange={this.updatePassword}
        placeholder='password'/>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default App;
