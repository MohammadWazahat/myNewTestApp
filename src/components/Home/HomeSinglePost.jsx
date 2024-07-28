import React from "react";
import Data from "../TestImage/TestImage.json";
import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { FaSave } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CommentPost from "./CommentPost";
import AddCommentForm from "../Comment/AddCommentForm";

const HomeSinglePost = (x) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      i m home single post
      <div>
        <div>
          <div className="bdr m-4 p-2 my-12 flex flex-col gap-4">
            <div className="bdr flex justify-between ">
              <div className="bdr flex gap-4 ">
                <div className="bdr ">
                  <img className="bdr h-12 w-12" src={Data[0].image} alt="" />
                </div>
                <div className="bdr ">
                  <div className="bdr "> name {x.name}</div>
                  <div className="bdr ">username </div>
                </div>
              </div>
              <div className="bdr ">
                {" "}
                three dots
                <HiDotsVertical />
              </div>
            </div>
            <div className="bdr "> </div>
            <div className="bdr ">
              <img className="bdr h-84 w-96 " src={Data[0].image} alt="" />
            </div>
            <div className="bdr flex justify-between ">
              <div className="bdr flex gap-4 ">
                <div className="bdr ">
                  like button
                  <BiSolidLike />
                </div>
                <div className="bdr ">
                <FaRegCommentDots onClick={handleShow} className="h-8 w-8"/>
                </div>
                <div className="bdr ">
                  share
                  <TbLocationShare />
                </div>
              </div>
              <div className="bdr ">
                <button>
                  savepost
                  <FaSave />
                </button>
              </div>
            </div>
            <div className="bdr ">
              <div className="bdr ">likes </div>
              <div className="bdr ">hashtags </div>
            </div>
            <div className="bdr ">comment column</div>
            <div>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Comment...</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  {/* <CommentPost /> */}
                  <AddCommentForm/>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSinglePost;
