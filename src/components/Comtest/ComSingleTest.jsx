import React, { useEffect, useState } from "react";
import {
  useAddCommentMutation,
  useUpdateCommentMutation,
} from "../../redux/features/apiSlices/myCommentSlice";

import { useDispatch, useSelector } from "react-redux";
import { comTestSliceOne } from "../../redux/features/comTestSlice/comTestSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ComSingleTest = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  
  // console.log(id)
const [myDatas ,setMyDatas ] = useState()
  useEffect(()=>{
  const datas =  axios
    .get(`http://localhost:3007/comTest/` + id )
    .then((res) => {
      console.log(res);
    //   location.reload();
    
setMyDatas(res.data)
    });
// console.log(datas)
  },[])

  const [addComment] = useAddCommentMutation();

  const [updateComment] = useUpdateCommentMutation();

  //   console.log(addComment)
  const myValue = useSelector((state) => state.storeSliceFive);

  //   console.log(myValue);
  const data = myValue.data;
  //   console.log(data.comTest[0].profile_pic);

  const [comment, setComment] = useState([]);
  const [comArr, setComArr] = useState([]);
  const [log , setLog ] = useState();

  const inputChangeHandler = (e) => {
    setComment( e.target.value);
    //   console.log(comment);
  };

  const addComs = () =>{
 
    // comArr.push(comment)


    // setComArr([...comArr, comment]);
    // console.log(comArr);
    myDatas.comment.push("hello")
   setLog(myDatas.comment)
    console.log(log)
    
  }

  const submitForm = (e) => {
    e.preventDefault();
    // setComArr([...comArr, comment]);
    // console.log(comArr);
    // const dalta = myDatas.comment.push(comment)

    const addData = {...myDatas , comment : comArr };
    // const addData = "hello";
    axios
    .put(`http://localhost:3007/comTest/` + id , addData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

    //   const news = { ...item, comment: comArr };
    //   const myComment = {
    //     id: id,
    //     myComment: news,
    //   };
  };

  // const [myData , setMyData ] = useState({
  //     datas : dat
  // })
console.log(myDatas)

  return (
    <div>
      i m single tet
      <div>
        <form onSubmit={submitForm}>
          <input
            className="bdr w-full mx-2 rounded p-2 "
            type="text"
            placeholder="write a comment.... "
            name="comment"
            onChange={inputChangeHandler}
          />
          <br />
          
          <button
            type="submit"
            // onClick={() => dispatch(comTestSliceOne(comArr))}
            // onClick={() => updateComment({id : id ,  data : comArr})}
            // onClick={() => addComs()}
          >
            Submit in
          </button>
        </form>
        <button
            onClick={() => addComs()}
          >
            push com
          </button>
      </div>
    </div>
  );
};

export default ComSingleTest;
