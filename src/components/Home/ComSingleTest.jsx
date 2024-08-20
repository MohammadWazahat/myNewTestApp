import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUpdateCommentMutation } from "../../redux/features/apiSlices/myCommentSlice";
import axios from "axios";
import { IoMdSend } from "react-icons/io";

const ComSingleTest = () => {
  const { id } = useParams();
  // console.log(id)
  const [allComments, setAllCOmments] = useState([]);
  const [myDatas, setMyDatas] = useState();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    const datas = axios
      .get(`http://localhost:3008/comTest/` + id)
      .then((res) => {
        // console.log(res);
        //   location.reload();
        setMyDatas(res.data);
        setAllCOmments(res.data.comment);
      });
    // console.log(datas)
  }, []);
  // console.log(allComments)
  // console.log(myDatas);

  const [updateComment] = useUpdateCommentMutation();

  const inputChangeHandler = (e) => {
    setComment(e.target.value);
    //   console.log(comment);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(comment)
    console.log(myDatas);
    const jacob = { ...myDatas, comment: [...myDatas.comment, comment] };
    const myDatasCom = {
      id: id,
      com: comment,
      dat: jacob,
    };
    updateComment(myDatasCom);
  };

  // console.log(myDatas.comment)
  return (
    <div>
      <section className="mt-8 ml-6">
        <div className="text-xl ">Comment</div>
      </section>
      <section className="mt-4 mx-4">
        <div className="flex gap-3">
          <div className="">
            <img src="" alt="" className="bdr h-10 w-10 rounded-full" />
          </div>
          <form onSubmit={submitForm} className="fc gap-4 ">
            <input
              className="bdr w-80 rounded p-2 px-3 hover:border-orange-400"
              type="text"
              placeholder="Add a comment.................. "
              name="comment"
              onChange={inputChangeHandler}
            />

            <div className=" flex justify-start items-center">
              <button type="submit">
                <IoMdSend className="h-9 w-9" />
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="mt-12">
        <div className="mx-12 flex flex-col gap-4">
          {allComments.map((item, index) => {
            return (
              <div key={index} className="flex justify-between items-center ">
                <div className="fc items-center gap-3">
                  <div className="">
                    <img src="" alt="" className="bdr h-10 w-10 rounded-full" />
                  </div>
                  <div>{item}</div>
                </div>
                <div className="bdr p-1.5 px-3 rounded-3xl font-bold text-gray-900 bg-orange-400 mr-4">
                  <button>Reply</button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      {/* <section>
        <div className="bdr p-2">
         <form action="" className="fc items-center"><div>
          
         <input type="text" className="bdr w-full h-10 " />
         </div>
         <div className="fc mt-6 items-center">
         <button className="fc bdr p-2">hello</button>
         </div>
         </form>

        </div>
      </section> */}
    </div>
  );
};

export default ComSingleTest;
