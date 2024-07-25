import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSinglePostsQuery,
  useUpdatePostMutation,
} from "../../redux/features/apiSlices/createPostSlice";

const UpdatePost = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState({
    postImage: "",
    caption: "",
    tagPeople: "",
    location: "",
    music: "",
    postImage: "",
  });

  const {
    data: myNewData,
    isError,
    isLoading,
    result,
  } = useGetSinglePostsQuery(id);

  useEffect(() => {
    console.log(myNewData);
    if (myNewData) {
      setUser(myNewData);
    }
  }, [myNewData]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const navigate = useNavigate();

  const [updatePost] = useUpdatePostMutation();
  // console.log(updateTask)

  const submitForm = (e) => {
    e.preventDefault();
    const task = {
      id: id,
      updatedPost: user,
    };
    console.log(task);
    updatePost(task);
    navigate("/readPost");
    location.reload();
  };

  return (
    <div>
      <div>
        i m update Post Form
        <Link to="/readPost">
          <Button variant="danger">my Post</Button>
        </Link>
      </div>
      <div>
        <div className="bdr m-2 p-2">
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="formGrouppostImage">
              <Form.Label>IMAGE</Form.Label>
              <Form.Control
                type="text"
                placeholder="postImage"
                name="postImage"
                value={user.postImage}
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupcaption">
              <Form.Label>caption</Form.Label>
              <Form.Control
                type="text"
                placeholder="caption"
                name="caption"
                value={user.caption}
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGrouptagPeople ">
              <Form.Label>tagPeople</Form.Label>
              <Form.Control
                type="text"
                placeholder="tagPeople"
                name="tagPeople"
                value={user.tagPeople}
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGrouplocation">
              <Form.Label>location</Form.Label>
              <Form.Control
                type="text"
                placeholder="location"
                name="location"
                value={user.location}
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupmusic">
              <Form.Label>music</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter music"
                name="music"
                value={user.music}
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Share Post
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
