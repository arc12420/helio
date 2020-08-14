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

register = () => {
    const {username, password} = this.state;
    axios.post('/api/add_User', {username, password}).then(res => {
        this.props.loginUser(res.data);
        this.props.history.push('/front_page');
    }).catch(err => {
        console.log(err);
        alert('Register Failed')
    })
}

 


    render(){
        const {password, username} = this.state;
        return(
            <div>
                <h5> Helo </h5>
                <input onChange={(event) => this.handleUsername(event.target.value)} placeholder="Username" value = {username}/>
                <input onChange={(event) => this.handlePassword(event.target.value)} placeholder="Password" value = {password}/>
                <button className="homeBtn" onClick={() =>this.props.history.push("/dashboard")}> Login </button>
                <button className="homeBtn" onClick={this.register}> Register </button>
            </div>
        )
    }
};


export default Auth