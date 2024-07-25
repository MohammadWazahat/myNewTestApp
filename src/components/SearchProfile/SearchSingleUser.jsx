import React from 'react'
import { Link } from 'react-router-dom'
import Data from "../TestImage/TestImage.json";

const SearchSingleUser = () => {
  return (
    <div>
      i am single user
      <div>
      <div className="bdr border-4 border-y-slate-800">
      <div className="bdr flex gap-4 justify-between">
        <div className="bdr flex gap-2 ">
          <div className="bdr m-2 p-2">
            <img className="bdr h-12 w-12"  src={Data[0].image} alt="" />
          </div>
          <div className="bdr ">
            <div className="bdr m-2 p-1">name</div>
            <div className="bdr m-2 p-1">userbname</div>
          </div>
        </div>
        <div className="bdr m-2 p-2 ">
          <button
            className="bdr m-2 p-2 "
          
          >
            Follow
          </button>
        </div>
      </div>
      <Link to="/">
        <button className="bdr m-2 p-2 " >
        View Profile ...
        </button>
      </Link>
    </div>
      </div>
    </div>
  )
}

export default SearchSingleUser
