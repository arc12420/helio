import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      content: "",
    };
  }

  handleTitle = (value) => {
    this.setState({ title: value });
  };

  handleImg = (value) => {
    this.setState({ img: value });
  };

  handleContent = (value) => {
    this.setState({ content: value });
  };

  savePost = () => {
    console.log(this.props);
    axios
      .post(`/api/add_post/${this.props.user.userId}`, { ...this.state })
      .then((res) => {
        this.props.history.push("/dashboard");
      });
  };

  render() {
    return (
      <div className="newPostMain">
        Title:
        <input onChange={(event) => this.handleTitle(event.target.value)} placeholder="Title" />
        {/* <img/> */}
        Image URL:
        <input onChange={(event) => this.handleImg(event.target.value)} placeholder="Image URL" />
        Content:
        <input
          onChange={(event) => this.handleContent(event.target.value)} placeholder="Post"
          className="newPostContent"
        />
        <div className="postBox">
          <button className="btn" onClick={() => this.savePost()}>
            Post{" "}
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Form);
