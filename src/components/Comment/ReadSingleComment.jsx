import React from "react";
import { Link } from "react-router-dom";
import { useDeleteCommentMutation } from "../../redux/features/apiSlices/myCommentSlice";

const ReadSinglePost = (x) => {
  // console.log(x);
  const [deleteComment] = useDeleteCommentMutation();

  const handleDelete = (id) => {
    // console.log(id)
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      deleteComment(id);
      location.reload();
    }
  };

  return (
    <div>
      <div className="bdr flex justify-between items-center ">
        <div>{x.myComment}</div>
        <button
          className="mt-2"
          variant="primary"
          onClick={() => handleDelete(x.id)}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default ReadSinglePost;
