import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

class Nav extends Component {
    render(){
        return(
            <div>
                Nav Component
                <button className="homeBtn" onClick={() =>this.props.history.push("/dashboard")} >Home</button>
                <button className="newPostBtn" onClick={() =>this.props.history.push("/new")} >New Post</button>
                <button className="logoutBtn" onClick={() =>this.props.history.push("/")} >Logout</button>
            </div>
        )
    }
};


export default withRouter(Nav)