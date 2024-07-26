import React from "react";
import HomeSinglePost from "./HomeSinglePost";
import post from "../../dataFiles/otherUserPosts.json";

const Home = () => {
  // console.log(post);
  return (
    <div>
      other users post reder here
      {post.map((item, index) => {
        return (
          <div key={index}>
            <HomeSinglePost {...item}/>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
