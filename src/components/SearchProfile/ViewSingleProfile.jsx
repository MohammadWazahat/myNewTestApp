import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddFollowingMutation } from "../../redux/features/apiSlices/addFollowingSlice";

const ViewSingleProfile = () => {
  const myValue = useSelector((state) => state.storeSliceThree);
  // console.log(myValue.singleUserProfile[0]);
  const viewData = myValue.singleUserProfile[0];
  // console.log(viewData)

  const [addFollowing] = useAddFollowingMutation();
  console.log(addFollowing);
  return (
    <div>
      <section className="mt-8">
        <div className="flex items-center justify-center p-4">
          <img
            className="h-48 w-48 rounded-full"
            src={viewData.profile_pic}
            alt=""
          />
        </div>
        <div className="flex justify-center items-center text-2xl font-normal">
          {viewData.name}{" "}
          <span className="text-sm fc items-center mx-4">
            ( @{viewData.username} )
          </span>
        </div>

        <div className=" flex gap-4 justify-center items-center mt-4">
          <div className=" flex gap-12">
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" text-2xl">{viewData.no_of_posts}</div>
              <div className=" text-lg font-light"> Posts</div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" text-2xl">{viewData.followers}</div>
              <div className=" text-lg font-light"> followers</div>
            </div>
            <div className=" flex flex-col justify-center items-center gap-2">
              <div className=" text-2xl"> {viewData.following}</div>
              <div className=" text-lg font-light"> followings</div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4">
        <div>
          <div className="flex justify-center items-center text-green-500 mx-4">
            {viewData.job_title}
          </div>
          <div className="flex justify-center items-center text-yellow-500 mx-4">
            {viewData.bio_data}
          </div>
          <div className="mt-12 flex justify-center items-center gap-8 ">
            <div>
              <button
                className="bdr p-2 px-4 rounded-3xl bg-slate-700 text-blue-300"
                onClick={() => addFollowing(viewData)}
              >
                Follow
              </button>
            </div>
            <div>
              <button className="bdr p-2 px-4 rounded-3xl bg-slate-700 text-blue-300">
                Share Profile
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="grid grid-cols-3">
          {viewData.post_pic.map((item, index) => {
            return (
              <div className="bdr" key={index}>
                <img className="bdr h-48 w-48" src={item} alt="" />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ViewSingleProfile;
