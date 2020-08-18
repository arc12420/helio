import React, {Component} from 'react';
import axios from"axios";

class Form extends Component {
    constructor() {
        super();
        this.state = {
          title: "",
          img: "",
          content: "",
          author_id: ""
        };
      }

      handleTitle =(value) => {
          this.setState({ title: value })
      }

      handleImg =(value) => {
          this.setState({ img: value })
      }

      handleContent =(value) => {
          this.setState({ content: value })
      }

      
    savePost = () => {
        axios
          .put(`/api/add_post/${this.props.match.params.id}`, { ...this.state })
          .then((res) => {
            this.props.history.push("/");
          });
      };

    render(){
        return(
            <div className="newPostMain">
                Title:
                <input onChange={(event) => this.handleTitle(event.target.value)} />
                <img/>
                Image URL:
                <input onChange={(event) => this.handleImg(event.target.value)} />
                Content:
                <input onChange={(event) => this.handleContent(event.target.value)}  className="newPostContent"/>
                <div className="postBox">
                    <button className="btn" onClick={() => this.savePost()}>
                         Post </button>
                </div>
            </div>
        )
    }
};



export default Form