import React from "react";

const OnePost = ({ post }) => {
  return (
    <div>
      <div className="card" style={{ width: 18 + "rem" }}>
        <div className="card-header">{post.category.name}</div>
        <div className="card-body">
          <h5 className="card-title">{post.tile}</h5>
          <p className="card-text">{post.body}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default OnePost;
