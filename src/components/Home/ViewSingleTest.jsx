import React from "react";
import { Link } from "react-router-dom";
import Data from "../TestImage/TestImage.json";
import { useDispatch } from "react-redux";
import { BiSolidLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";
import { FaSave } from "react-icons/fa";
import { HiDotsVertical } from "react-icons/hi";
import { myFollowingSliceOne } from "../../redux/features/myFollowingSlice/myFollowingSliice";

const ViewSingleTest = (x) => {
  //   console.log(x);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
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
                    onClick={() => dispatch(myFollowingSliceOne(x))}
                  >
                    Follow
                  </button>
                </div>
                <div className="">
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
            <div className="flex justify-between items-center mx-2  ">
              <div className=" flex gap-4 items-center ">
                <div className=" fc gap-2 items-center">
                  <div>
                    <BiSolidLike className="h-6 w-6" />
                  </div>
                  <div className="text-sm">4000</div>
                </div>
                <div className="fc gap-2 items-center ">
                  <div>
                    <Link to={`/comTest/${x.id}`}>
                      <button className="mt-2 ">
                        <FaRegCommentDots className="h-6 w-6" />
                      </button>
                    </Link>
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
          <section className="m-2 ">
            <div className=" ">#staying Home #Busy #Love You </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleTest;
