import React, { useState } from 'react'

const CommentPost = () => {

    const [comment, setComment] = useState([]);
    
    const handleChangeComment = (e) => {
        setComment ( e.target.value );
        // console.log(comment);
      };
    
      const submitForm = (e) => {
        e.preventDefault();
        // console.log(comment);
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
            onChange={handleChangeComment}
          
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>{comment} </div>
   
    </div>
  )
}

export default CommentPost