import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

const MyNavbar = () => {
  return (
    <div>
      <section>
        <header>
          <div className=" navbarColor flex  justify-around items-center p-2">
            <div className=" text-2xl font-bold">
              <span className="text-green-700 text-3xl">F</span>INDER
              <span className="text-green-700 text-3xl"> B</span>UBBLE
            </div>
            <div className="flex item-center justify-center ">
              <ul className="flex gap-6 ">
                <li className="">
                  <NavLink to="/" className="">
                    <IoHomeOutline
                      color="rgb(0, 68, 254)"
                      className=" h-8 w-8 "
                    />
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/searchProfile" className="">
                    <BiCategory color="rgb(0, 68, 254)" className="h-8 w-8 " />
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/myFollowing" className="">
                    <div className="flex">
                      <div>
                        <MdOutlineShoppingCart
                          color="rgb(0, 68, 254)"
                          className="h-8 w-8 "
                        />
                      </div>
                    </div>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink to="/readPost" className="">
                    <MdOutlineAccountCircle
                      color="rgb(0, 68, 254)"
                      className="h-8 w-8 "
                    />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <hr className="horizon boder border-slate-800 " />
          </div>
        </header>
      </section>
    </div>
  );
};

export default MyNavbar;
