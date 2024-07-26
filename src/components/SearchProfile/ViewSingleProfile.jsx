import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAddFollowingMutation } from "../../redux/features/apiSlices/addFollowingSlice";

const ViewSingleProfile = () => {
  const myValue = useSelector((state) => state.storeSliceThree);
  // console.log(myValue.singleUserProfile[0]);
  const viewData = myValue.singleUserProfile[0];
  // console.log(viewData)

  const [addFollowing] = useAddFollowingMutation();
  console.log(addFollowing)
  return (
    <div>
      <div className="bdr m-2 p-2 ">
        <div className="bdr m-2 p-2">{viewData.name}</div>
        <div className="bdr m-2 p-2 ">
          <button
            className="bdr m-2 p-2 "
            onClick={() => addFollowing(viewData)}
          >
            Follow
          </button>
        </div>
        <div className="bdr flex justify-between m-2 p-2">
          <div className="bdr m-2 p-2">
            <img className="bdr h-12 w-12" src={viewData.profile_pic} alt="" />
          </div>

          <div className="bdr flex justify-between m-2 p-2">
            <div className="bdr m-2 p-2">
              no of post : {viewData.no_of_posts}
            </div>
            <div className="bdr m-2 p-2">followers : {viewData.followers}</div>
            <div className="bdr m-2 p-2">following : {viewData.following}</div>
          </div>
        </div>
        <div className="bdr m-2 p-2">{viewData.username}</div>
        <div className="bdr m-2 p-2">bio data : {viewData.bio_data}</div>
        <div className="bdr m-2 p-2">hash tags</div>
        <div className="bdr m-2 p-2">{viewData.job_title}</div>

        <div className="bdr m-2 p-2">see my posts</div>
        <div>
          <div>
            {viewData.post_pic.map((item, index) => {
              return (
                <div className="bdr m-2 p-2" key={index}>
                  <img className="bdr h-48 w-48" src={item} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSingleProfile;
