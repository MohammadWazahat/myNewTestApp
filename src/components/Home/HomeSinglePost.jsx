import React from "react";
import Data from "../TestImage/TestImage.json";
import { useDispatch, useSelector } from "react-redux";

import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import CommentPost from "./CommentPost";
import AddCommentForm from "../Comment/AddCommentForm";

import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { FaSave } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { useAddFollowingMutation } from "../../redux/features/apiSlices/addFollowingSlice";
import { actionTypeOneotherUserProfileSliceOne } from "../../redux/features/otherUserProfilesSlices/otherUserProfileSliceOne";
import { myFollowingSliceOne } from "../../redux/features/myFollowingSlice/myFollowingSliice";


const HomeSinglePost = (x) => {
//  console.log(x)
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [addCom , setAddCom ] = useState();
  const handleCom = (x)=>{
    console.log(x);
    setAddCom(x);
    console.log(addCom);
  }
  const [comment, setComment] = useState([]);

  const inputChangeHandler = (e) => {
    // console.log(e.target.value)
    setComment(e.target.value);
    // console.log(comment);
  };
 

  const submitForm = (e) => {
    e.preventDefault();
    // const myComment = {
    //   myComment : comment ,
    // }
    // addComment(myComment);
    // location.reload();
    console.log(comment)
  };
  // const addFollowing =(y)=>{
  //   console.log(y)
  // }

  const [addFollowing] = useAddFollowingMutation();
  // console.log(addFollowing);
  return (
    <div className="">
      <section>
        <div className="fb px-2">
          <div className="fc gap-4">
            <div className="">
              <img
                className="border-2 rounded-full h-16 w-16"
                src={Data[0].image}
                alt=""
              />
            </div>
            <div className=" fc flex-col ">
              <div className="text-xl ">{x.name}</div>
              <div className="text-sm">username </div>
            </div>
          </div>
          <div className="fc gap-4 mx-2 ">
            <div className="">
              <button
                className="border rounded-xl p-1 px-3"
                onClick={() =>
                  dispatch( myFollowingSliceOne(x))
                }
                // onClick={() => addFollowing(x)}
              >
                Follow
              </button>
            </div>
            <div className=" b">
              <HiDotsVertical className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="m-2">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </div>
        <div className="">
          <img className=" w-full h-96" src={Data[0].image} alt="" />
        </div>
      </section>
      <section className="mt-8 ">
        <div className="flex justify-between mx-2  ">
          <div className=" flex gap-4 ">
            <div className=" fc gap-2 items-center">
              <div>
                <BiSolidLike className="h-6 w-6" />
              </div>
              <div className="text-sm">4000</div>
            </div>
            <div className="fc gap-2 items-center ">
              <div>
                <FaRegCommentDots className="h-6 w-6" onClick={handleShow} />
              </div>
              <div className="text-sm">4000</div>
            </div>
            <div className=" fc gap-2 items-center ">
              <div>
                <TbLocationShare className="h-6 w-6" />
              </div>
              <div className="text-sm">4000</div>
            </div>
          </div>
          <div className="fc items-center ">
            <button>
              <FaSave className="h-6 w-6" />
            </button>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className=" ">comment column</div>
        <div className=" ">hashtags </div>
      </section>
      <section>
        <button
          onClick={() => handleCom(x)} >
          com
        </button>
      </section>
      <section>
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
          <button type="submit">Submit</button>
        </form>
      </div>
      </section>

      <div>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Comment...</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {/* <CommentPost /> */}
            <AddCommentForm />
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default HomeSinglePost;
