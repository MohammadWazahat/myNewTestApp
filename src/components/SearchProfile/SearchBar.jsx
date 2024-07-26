import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";
import { actionTypeTwootherUserProfileSliceOne } from "../../redux/features/otherUserProfilesSlices/otherUserProfileSliceOne";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const inputHandler = (e) => {
    const name = e.target.value;
    setText({ ...text, name });
    console.log(text);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center">
      <div className=" w-1/3">
        <form className="" onSubmit={submitForm}>
          <div className="flex  ">
            <div className=" basis-5/6">
              <input
                className="bdr"
                type="text"
                name="brand"
                onChange={inputHandler}
                required
              />
            </div>
            <div className="bdr">
              <button
                type="submit"
                className="bdr"
                onClick={() =>
                  dispatch(actionTypeTwootherUserProfileSliceOne(text.name))
                }
              >
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
