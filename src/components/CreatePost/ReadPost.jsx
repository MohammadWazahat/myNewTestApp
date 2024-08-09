import React from "react";
import ReadSinglePost from "./ReadSinglePost";
import { useGetPostsQuery } from "../../redux/features/apiSlices/createPostSlice";

const ReadPost = () => {
  const { data: myUser, isError, isLoading, error } = useGetPostsQuery();
  // console.log(myUser);
  return (
    <div>
      <div>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : isError ? (
          <p className="text-center">{error.error || "Something went wrong"}</p>
        ) : (
          <div className="grid grid-cols-1 gap-12">
            {myUser.map((item, index) => {
              return (
                <div key={index}>
                  <ReadSinglePost {...item} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReadPost;
