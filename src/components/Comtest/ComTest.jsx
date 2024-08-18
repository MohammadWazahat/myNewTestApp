import React, { useState } from "react";
import {
  useAddCommentMutation,
  useUpdateCommentMutation,
} from "../../redux/features/apiSlices/myCommentSlice";

import { useDispatch, useSelector } from "react-redux";
import { comTestSliceOne } from "../../redux/features/comTestSlice/comTestSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import ComSingleTest from "./ComSingleTest";
import ViewSingleTest from "./ViewSingleTest";

const ComTest = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [addComment] = useAddCommentMutation();

  const [updateComment] = useUpdateCommentMutation();

  //   console.log(addComment)
  const myValue = useSelector((state) => state.storeSliceFive);

  // console.log(myValue);
  const data = myValue.data;
  // console.log(data.comTest[0].profile_pic);

  const [comment, setComment] = useState([]);
  const [comArr, setComArr] = useState([]);

  const inputChangeHandler = (e) => {
    setComment(e.target.value);
    // console.log(comment);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setComArr([...comArr, comment]);
    // comment.push(comment)
    // const myComment = {
    //   myComment: comment,
    // };
    // addComment(myComment);
    // navigate("/readPost");
    // location.reload();
    // console.log(comArr);
  };

  //   const myComment = {
  //     myComment : comment ,
  //   }
  //   addComment(myComment);

  return (
    <div>
      i am com test
      <button
        className="border rounded-xl p-1 px-3"
        onClick={() => dispatch(comTestSliceOne("hello g"))}
      >
        View Profile ...
      </button>
      <section>
        <div>
          {data.comTest.map((item, index) => {
            return (
              <div key={index}>
                <ViewSingleTest {...item} />
              </div>
            );
          })}
        </div>
      </section>
      <section>
        <div>
          {data.comTest.map((item, index) => {
            // const pay = {
            //     data : data.comTest ,
            //     item : item ,
            // }
            // const news = { ...item, comment: [comment] };
            const news = { ...item, comment: comArr };
            const myComment = {
              id: id,
              myComment: news,
            };

            //        const addString = news.comment ;
            // addString.push(action.payload);

            return (
              <div key={index}>
                {item.user_id}
                <div>
                  <form onSubmit={submitForm}>
                    {/* <label htmlFor="comment">Comment</label> */}
                    <br />
                    <input
                      className="bdr w-full mx-2 rounded p-2 "
                      type="text"
                      placeholder="write a comment.... "
                      name="comment"
                      onChange={inputChangeHandler}
                    />
                    <br />
                    <button
                      type="submit"
                      onClick={() => dispatch(comTestSliceOne(news))}
                      //   onClick={() => addComment(myComment)}
                      // onClick={() => updateComment(myComment)}
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <button
                  className="border rounded-xl p-1 px-3"
                  onClick={() => dispatch(comTestSliceOne(news))}
                >
                  see id
                </button>
                <div>
                  <Link to={`/comTest/${item.user_id}`}>
                    <button
                      className="border rounded-xl p-1 px-3"
                      // onClick={() =>
                      //   dispatch(
                      //     actionTypeOneotherUserProfileSliceOne(item.user_id)
                      //   )
                      // }
                    >
                      View Profile ...
                    </button>
                  </Link>
                </div>

               
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ComTest;
