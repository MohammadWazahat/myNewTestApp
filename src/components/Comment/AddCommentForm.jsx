import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddCommentMutation } from "../../redux/features/apiSlices/myCommentSlice";
import ReadComment from "./ReadComment"

const AddCommentForm = () => {


  const navigate = useNavigate();
  
  const [addComment] = useAddCommentMutation();
  // console.log(addComment)

  const [comment, setComment] = useState([]);

  const inputChangeHandler = (e) => {
    setComment(e.target.value);
    // console.log(comment);
  };
 

  const submitForm = (e) => {
    e.preventDefault();
    const myComment = {
      myComment : comment ,
    }
    addComment(myComment);
    // navigate("/readPost");
    location.reload();
    console.log(comment)
  };
  return (
    <div>
      i am a comment
      <div>
        <form onSubmit={submitForm}>
          <label htmlFor="comment">Comment</label>
          <br />
          <input
            type="text"
            placeholder="write a comment.... "
            name="comment"
              onChange={inputChangeHandler}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <ReadComment/>
         </div>
    </div>
  );
};

export default AddCommentForm;
