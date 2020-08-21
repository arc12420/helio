import React from "react";
import { withRouter } from "react-router-dom";

function Post(props) {
  return (
    <div className="singlePost">
      <div className="title">
        {props.posts.title}
      </div>
      <div className="imageAndContentAndDelete">
      <div className="imageAndContent">
        <div className="image">
          <img src={props.posts.img} alt="uploadedImage" />
        </div>
        <div className="thePost">
          {props.posts.content}
        </div>
      </div>
      <div className="deletePostButton">
        <button className="buttons" onClick={() => props.dlt(props.posts.id)}>
        {" "}
        Delete{" "}
        </button>
      </div>
      </div>
    </div>
  );
}

export default withRouter(Post);
