import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReadSinglePost from "./ReadSinglePost";
import { useGetPostsQuery } from "../../redux/features/apiSlices/createPostSlice";

const ReadPost = () => {
  const { data: myUser, isError, isLoading, error } = useGetPostsQuery();
  // console.log(myUser);
  return (
    <div>
      i m read post page
      <div>
        <Link to="/addPost">
          <Button variant="danger"> Create Post</Button>
        </Link>
      </div>
      <div>
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : isError ? (
          <p className="text-center">{error.error || "Something went wrong"}</p>
        ) : (
          myUser.map((item, index) => {
            return (
              <div key={index}>
                <ReadSinglePost {...item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ReadPost;