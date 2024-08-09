import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CiLock } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSquarePlus } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import ReadPost from "../CreatePost/ReadPost";

const MyProfile = () => {
  return (
    <div>
      <section className="mt-2">
        <div className="flex justify-between items-center mx-4 my-2">
          <div className="flex justify-center items-center gap-2">
            <div>
              <CiLock className=" h-8 w-8 " />
            </div>
            <div>@Kingmozarkes006</div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div>
              <CiSquarePlus className=" h-8 w-8 " />
            </div>
            <div>
              <RxHamburgerMenu className=" h-8 w-8 " />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="flex items-center justify-center p-4">
          <img
            className="h-48 w-48 rounded-full"
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
        </div>
        <div className="flex justify-center items-center text-2xl font-normal">
          Zara Lorenson
        </div>
        <div className=" flex gap-4 justify-center items-center mt-4">
          <div className=" flex gap-12">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" text-2xl">56</div>
              <div className=" text-lg font-light"> Posts</div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" text-2xl">1001</div>
              <div className=" text-lg font-light"> followers</div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" text-2xl">500</div>
              <div className=" text-lg font-light">
                <NavLink to="/myFollowing">followings</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div>
          <div className="flex justify-center items-center text-yellow-500 ">
            Supermodel | Versace | Gucci | Louis Vuitton
          </div>
          <div className="mt-12 flex justify-center items-center gap-8 ">
            <div>
              <button className="bdr p-2 px-4 rounded-3xl bg-slate-700 text-blue-300">
                Edit Profile
              </button>
            </div>
            <div>
              <button className="bdr p-2 px-4 rounded-3xl bg-slate-700 text-blue-300">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-12">
        <div className=" flex justify-around items-center  ">
          <div className="">
            <TbGridDots className="h-8 w-8 " />
          </div>
          <div className="">
            <NavLink to="/addPost" onClick={() => createPost()}>
              <CiSquarePlus className=" h-8 w-8 " />
            </NavLink>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div>
          <ReadPost />
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
