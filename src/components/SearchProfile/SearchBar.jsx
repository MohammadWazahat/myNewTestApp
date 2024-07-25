import React from "react";
import { IoMdSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="bdr rounded-3xl w-1/3">
        <form className="">
          <div className="flex bdr ">
            <div className="bdr basis-5/6">
              <input
                type=""
                id=""
                className=""
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
            <div className="bdr">
              <button type="submit" className="">
                <IoMdSearch className="h-8 w-8 " />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
