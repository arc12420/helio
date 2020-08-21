import React from "react";
import { withRouter } from "react-router-dom";

function Post(props) {
  return (
    <div className="singlePost">
      <img src={props.posts.img} alt="uploadedImage" />
      {props.posts.content}
      <button className="buttons" onClick={() => props.dlt(props.posts.id)}>
        {" "}
        Delete{" "}
      </button>
    </div>
  );
}

export default withRouter(Post);
