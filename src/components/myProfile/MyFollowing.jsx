import React from "react";
import { useDeleteFollowingMutation, useGetFollowingsQuery } from "../../redux/features/apiSlices/addFollowingSlice";

const MyFollowing = () => {
  const {
    data: myFollowing,
    isError,
    isLoading,
    error,
  } = useGetFollowingsQuery();
  // console.log(myFollowing.length);

  const [deleteFollowing] = useDeleteFollowingMutation();

  const handleDelete = (id) => {
    console.log(id)
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("Are You sure to Unfollow the Profile");
    if (confirm) {
      deleteFollowing(id);
      location.reload();
    }
  };

  return (
    <div>
      i am my following
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
              myFollowing.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="flex justify-between m-2 p-2 bdr">
                      <div>{item.name}</div>
                      <div>
                        <button
                          className="bdr"
                          onClick={() => handleDelete(item.id)}
                        >
                          UnFollow
                        </button>
                      </div>
                    </div>
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

export default MyFollowing;
