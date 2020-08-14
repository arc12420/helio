import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {loginUser} from '../redux/reducer';
import axios from 'axios';

class Auth extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: ""          
        };
      }

      handleUsername = (value) => {
    this.setState({ username: value });
  };

    handlePassword = (value) => {
    this.setState({ password: value });
  };

  register = () => {
      const {username, password} = this.state;
      axios.post('/api/add_User', {username,password}).then(res => {
          this.props.loginUser(res.data);
          this.props.history.push('/dashboard')
      }).catch(err => {
          console.log(err);
          alert('Login Failed')
      })
  }

  login = () => {
    const {username, password} = this.state;
    axios.post('/auth/login', {username, password}).then(res => {
        this.props.loginUser(res.data);
        this.props.history.push('/front_page')
    }).catch(err => {
        console.log(err);
        alert('Login Failed')
    })
}

 


    render(){
        return(
            <div>
                <h5> Helo </h5>
                <input onChange={(event) => this.handleUsername(event.target.value)} placeholder="Username"/>
                <input onChange={(event) => this.handlePassword(event.target.value)} placeholder="Password"/>
                <button className="homeBtn" onClick={() =>this.props.history.push("/dashboard")}> Login </button>
                <button className="homeBtn" onClick={() =>this.props.history.push("/dashboard")}> Register </button>
            </div>
        )
    }
};


export default Auth