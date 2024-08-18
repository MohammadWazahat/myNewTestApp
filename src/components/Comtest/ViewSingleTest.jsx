import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ViewSingleTest = (x) => {
//   console.log(x);

  return (
    <div>
      i m view single
      <div>
        <Link to={`/comTest/${x.id}`}>
          <button
            className="border rounded-xl p-1 px-3"
            // onClick={() => dispatch(comTestSliceOne(news))}
          >
            comm
          </button>
        </Link>

        
      </div>
    </div>
  );
};

export default ViewSingleTest;
