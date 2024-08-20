import React, { useState } from "react";
import ViewSingleTest from "./ViewSingleTest";
import { useGetCommentQuery } from "../../redux/features/apiSlices/myCommentSlice";
import { FaRegHeart } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";

const ComTest = () => {
  const [pic, setPic] = useState([
    {
      image:
        "https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Name",
    },
    {
      image:
        "https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Name",
    },
    {
      image:
        "https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Name",
    },
    {
      image:
        "https://images.pexels.com/photos/2027821/pexels-photo-2027821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      name: "Name",
    },
  ]);
  console.log(pic);
  
  const { data, isError, isLoading } = useGetCommentQuery();
  // console.log(data)
  if (isLoading == true) {
    return <div>Loading...........</div>;
  }
  if (isError == true) {
    return <div>error...........</div>;
  }



  return (
    <div>
      <section className="mt-4">
        <div className=" fb mx-4">
          <div className=" fc text-2xl">Zara Lorenson</div>
          <div className=" fc gap-6">
            <div>
              <FaRegHeart className="h-8 w-8" />
            </div>
            <div>
              <RiMessengerLine className="h-8 w-8" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="fc gap-3 ">
          {pic.map((item, index) => {
            return (
              <div>
                <div>
                  <img
                    className="h-24 w-24 rounded-full bdr"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="fc mt-2">{item.name}</div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mt-12">
        <div className="grid grid-cols-1 gap-12">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <ViewSingleTest {...item} />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ComTest;
