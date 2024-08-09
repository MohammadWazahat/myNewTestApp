import React from "react";
import {
  useDeleteFollowingMutation,
  useGetFollowingsQuery,
} from "../../redux/features/apiSlices/addFollowingSlice";

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
    console.log(id);
    // window.confirm ask for confirmation of deletion
    const confirm = window.confirm("Are You sure to Unfollow the Profile");
    if (confirm) {
      deleteFollowing(id);
      location.reload();
    }
  };

  return (
    <div>
      <div>
        <section className="mt-8">
          <div>
            {isLoading ? (
              <p className="text-center">Loading...</p>
            ) : isError ? (
              <p className="text-center">
                {error.error || "Something went wrong"}
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-8">
                {myFollowing.map((item, index) => {
                  return (
                    <div key={index}>
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
                                <button
                                  className="border rounded-xl p-1 px-3"
                                  onClick={() => handleDelete(item.id)}
                                >
                                  UnFollow
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyFollowing;
