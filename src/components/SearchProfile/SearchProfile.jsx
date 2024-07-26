import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchSingleUser from "./SearchSingleUser";
import SearchBar from "./SearchBar";

const SearchProfile = () => {
  const myValue = useSelector((state) => state.storeSliceThree);
  // console.log(myValue);
  const data = myValue.data;
  // console.log(data)

  return (
    <div>
      <div>
        <SearchBar />
      </div>
      <div className="flex flex-col gap-8 m-2 p-2.5 ">
        {data.map((item, index) => {
          return <SearchSingleUser key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default SearchProfile;
