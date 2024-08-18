import React from "react";
import { useGetCommentsQuery } from "../../redux/features/apiSlices/myCommentSlice";
import ReadSingleComment from "./ReadSingleComment";
const ReadPost = () => {
  const { data: myUser, isError, isLoading, error } = useGetCommentsQuery();
  console.log(myUser);
  return (
    <div>
      <div>
        <div>
          <div>
            {isLoading ? (
              <p className="text-center">Loading...</p>
            ) : isError ? (
              <p className="text-center">
                {error.error || "Something went wrong"}
              </p>
            ) : (
              myUser.map((item, index) => {
                return (
                  <div key={index} className="">
                    <ReadSingleComment {...item} />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadPost;
