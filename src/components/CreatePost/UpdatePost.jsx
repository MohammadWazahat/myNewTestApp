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
  // console.log(id);

  const [user, setUser] = useState({
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
    // console.log(myNewData);
    if (myNewData) {
      setUser(myNewData);
    }
  }, [myNewData]);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // console.log(user);
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
    // console.log(task);
    updatePost(task);
    navigate("/readPost");
    location.reload();
  };

  return (
    <div>
      <section>
        <div className="text-2xl fc items-center text-orange-500 my-8">
          Update Your Post
        </div>
      </section>

      <section>
        <div>
          <div className="bdr m-2 p-2">
            <Form onSubmit={submitForm}>
              <Form.Group className="mb-3" controlId="formGrouppostImage">
                <Form.Label>Update Your Pic</Form.Label>
                <Form.Control
                  type="text"
                  name="postImage"
                  value={user.postImage}
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupcaption">
                <Form.Label>Update Caption</Form.Label>
                <Form.Control
                  type="text"
                  name="caption"
                  value={user.caption}
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGrouptagPeople ">
                <Form.Label>Update tags</Form.Label>
                <Form.Control
                  type="text"
                  name="tagPeople"
                  value={user.tagPeople}
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGrouplocation">
                <Form.Label>Change Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  value={user.location}
                  onChange={inputChangeHandler}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupmusic">
                <Form.Label>Add Your Song</Form.Label>
                <Form.Control
                  type="text"
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
      </section>
    </div>
  );
};

export default UpdatePost;
