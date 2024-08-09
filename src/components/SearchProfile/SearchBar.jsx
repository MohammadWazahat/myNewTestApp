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
    <div className="fc ">
      <section>
        <div className="">
          <form className="" onSubmit={submitForm}>
            <div className="fc ">
              <div className=" ">
                <input
                  className=" h-full border-s border-t border-b  rounded-s-3xl px-4 "
                  type="text"
                  name="brand"
                  onChange={inputHandler}
                  required
                />
              </div>
              <div className="p-1 fc items-center border-e border-t border-b  rounded-e-3xl px-3">
                <IoMdSearch
                  className="h-6 w-6"
                  onClick={() =>
                    dispatch(actionTypeTwootherUserProfileSliceOne(text.name))
                  }
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SearchBar;
