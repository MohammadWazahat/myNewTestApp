import React from "react";
// import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div>
        <section>
          <header>
            <div className="  flex  justify-around items-center p-2">
              <div className=" text-2xl font-bold">
                <span className="text-green-400 text-3xl font-medium">J</span>INGLE
                <span className="text-green-400 text-3xl ml-3">R</span>OOM
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
                  {/* <li className="">
                    <NavLink to="/mySavedPosts" className="">
                      <BiCategory
                        color="rgb(0, 68, 254)"
                        className="h-8 w-8 "
                      />
                    </NavLink>
                  </li> */}
                  <li className="">
                    <NavLink  to="/searchProfile"  className="">
                      <div className="flex">
                        <div>
                          <IoSearch
                            color="rgb(0, 68, 254)"
                            className="h-8 w-8 "
                          />
                        </div>
                      </div>
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/myProfile" className="">
                      <MdOutlineAccountCircle
                        color="rgb(0, 68, 254)"
                        className="h-8 w-8 "
                      />
                    </NavLink>
                  </li>
                  <li className="">
                    <NavLink to="/comTest" className="">
                      C
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>

            <div >
              <hr className="horizon border border-slate-100 " />
            </div>
          </header>
        </section>
      </div>
    </div>
  );
};

export default Navbar;
