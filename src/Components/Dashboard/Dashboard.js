import React, { Component } from "react";
import axios from "axios";
import Post from "../Post/Post";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.getPosts();
  }
  getPosts = () => {
    axios.get("/api/posts").then((res) => {
      console.log(res.data);
      this.setState({
        posts: res.data,
      });
    });
  };
  dlt = (identity) => {
    axios.delete(`/api/delete_post/${identity}`).then((res) => {
      this.getPosts();
    });
  };
  render() {
    const arr = this.state.posts.map((element, index) => {
      return (
                       
        <div className="pstbx">
          <Post className="postComp" posts={element} dlt={this.dlt} />        
        </div>
        
      );
    });
    return <div className="dashboardAll">
        <div className="searchBox">
          <input className="searchInput" ></input>
          <button>Search</button>
        </div>
        <div className="allComments">
        <body> 
          {arr}
          </body>
        </div>
      </div>;
      
  }
}

export default Dashboard;
