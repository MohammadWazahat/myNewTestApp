import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Data from "../TestImage/TestImage.json";
import { actionTypeOneotherUserProfileSliceOne } from "../../redux/features/otherUserProfilesSlices/otherUserProfileSliceOne";

const SearchSingleUser = (item) => {
  const dispatch = useDispatch();
  // console.log(dispatch);
  // console.log(x);

  return (
    <div>
      <section>
        <div className="fb">
          <div className="fc gap-4">
            <div className="">
              <img
                className="border-2 rounded-full h-16 w-16"
                src={item.profile_pic}
                alt=""
              />
            </div>
            <div className=" fc flex-col ">
              <div className="text-xl ">{item.name}</div>
              <div className="text-sm">{item.username} </div>
            </div>
          </div>
          <div className="fc gap-4 mx-2 ">
            <div className=" ">
              <div>
                <Link to={`/viewSingleProfile/${item.user_id}`}>
                  <button
                    className="border rounded-xl p-1 px-3"
                    onClick={() =>
                      dispatch(
                        actionTypeOneotherUserProfileSliceOne(item.user_id)
                      )
                    }
                  >
                    View Profile ...
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchSingleUser;
