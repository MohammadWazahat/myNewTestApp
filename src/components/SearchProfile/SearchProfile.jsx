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
    <div className="fc">
    <div className="md:w-1/2  lg:w-2/5">
    <section className="mt-4">
        <div>
          <SearchBar />
        </div>
      </section>
      <section className="mt-16">
        <div className="flex flex-col gap-8 m-2 p-2.5 ">
          {data.map((item, index) => {
            return <SearchSingleUser key={index} {...item} />;
          })}
        </div>
      </section>
    </div>
    </div>
  );
};

export default SearchProfile;
