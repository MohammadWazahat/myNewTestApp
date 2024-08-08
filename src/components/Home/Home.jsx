import React from "react";
import HomeSinglePost from "./HomeSinglePost";
import post from "../../dataFiles/otherUserPosts.json";

import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

const Home = () => {
  // console.log(post);
  return (
    <div>
      <section className="mt-4">
        <div className=" fb mx-4">
          <div className=" fc text-2xl">Zara Lorenson</div>
          <div className=" fc gap-6">
            <div>
              <FaRegHeart className="h-8 w-8" />
            </div>
            <div>
              <RiMessengerLine className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="fc gap-3 ">
          <div>
            <div>
              {" "}
              <img
                className="h-24 w-24 rounded-full bdr"
                src="https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="fc mt-2">Name</div>
          </div>
          <div>
            <div>
              {" "}
              <img
                className="h-24 w-24 rounded-full bdr"
                src="https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="fc mt-2">Name</div>
          </div>
          <div>
            <div>
              {" "}
              <img
                className="h-24 w-24 rounded-full bdr"
                src="https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="fc mt-2">Name</div>
          </div>
          <div>
            <div>
              {" "}
              <img
                className="h-24 w-24 rounded-full bdr"
                src="https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
            </div>
            <div className="fc mt-2">Name</div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="grid grid-col-1 gap-8">
          {post.map((item, index) => {
            return (
              <div key={index}>
                <HomeSinglePost {...item} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
