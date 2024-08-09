import React from "react";
import Data from "../TestImage/TestImage.json";
import { Link } from "react-router-dom";
import { useDeletePostMutation } from "../../redux/features/apiSlices/createPostSlice";
import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { FaSave } from "react-icons/fa";

const ReadSinglePost = (x) => {
  // console.log(x);
  // console.log(Data[0].image)

  const [deletePost] = useDeletePostMutation();

  const handleDelete = (id) => {
    // console.log(id)
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("would you like to delete the user");
    if (confirm) {
      deletePost(id);
      location.reload();
    }
  };

  return (
    <div>
      <div className="border py-4">
        <section className="">
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
                  <FaRegCommentDots className="h-6 w-6" />
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
        <section className="mt-8">
          <div className="fb items-center mx-4 ">
            <div>
              <Link to={`/updatePost/` + x.id}>
                <button className="bdr fc items-center p-2 rounded bg-cyan-400 text-gray-800">
                  Update Post
                </button>
              </Link>
            </div>
            <div>
              <button
                className="bdr fc items-center p-2 rounded bg-red-400 text-gray-800"
                onClick={() => handleDelete(x.id)}
              >
                Delete Post
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReadSinglePost;
