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
      <div>
        <div className="bdr border-4 border-y-slate-800">
          <div className="bdr flex gap-4 justify-between">
            <div className="bdr flex gap-2 ">
              <div className="bdr m-2 p-2">
                <img className="bdr h-12 w-12" src={item.profile_pic} alt="" />
              </div>
              <div className="bdr ">
                <div className="bdr m-2 p-1">{item.name}</div>
                <div className="bdr m-2 p-1">{item.username}</div>
              </div>
            </div>
            <div>
              <Link to={`/viewSingleProfile/${item.user_id}`}>
                <button
                  className="bdr m-2 p-2 "
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
    </div>
  );
};

export default SearchSingleUser;
