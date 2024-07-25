import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const UpdatePost = () => {
  return (
    <div>
      i m update Post Form
      <Link to="/readPost">
        <Button variant="danger">my Post</Button>
      </Link>
    </div>
  );
};

export default UpdatePost;
