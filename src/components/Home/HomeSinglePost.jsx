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
    <div className="bdr py-2">
      <section>
        <div className="fb">
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
              <button className="border rounded-xl p-1 px-3">Follow</button>
            </div>
            <div className=" b">
              <HiDotsVertical className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="">
          <img className=" w-full h-96" src={Data[0].image} alt="" />
        </div>
      </section>
      <section className="mt-8 ">
        <div className="flex justify-between mx-2  ">
          <div className=" flex gap-4 ">
            <div className=" fc gap-2 items-center">
              <div>
                <BiSolidLike className="h-8 w-8" />
              </div>
              <div>4000</div>
            </div>
            <div className="fc gap-2 items-center ">
              <div>
                <FaRegCommentDots className="h-8 w-8" onClick={handleShow} />
              </div>
              <div>4000</div>
            </div>
            <div className=" fc gap-2 items-center ">
              <div>
                <TbLocationShare className="h-8 w-8" />
              </div>
              <div>4000</div>
            </div>
          </div>
          <div className="fc items-center ">
            <button>
              <FaSave className="h-8 w-8" />
            </button>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div className="bdr ">comment column</div>
        <div className="bdr ">likes </div>
        <div className="bdr ">hashtags </div>
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
