import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAddPostMutation } from "../../redux/features/apiSlices/createPostSlice";

const AddPostForm = () => {
  const [values, setValues] = useState({
    caption: "",
    tagPeople: "",
    location: "",
    music: "",
    postImage: "",
  });

  const navigate = useNavigate();

  const [addPost] = useAddPostMutation();
  // console.log(addPost)

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    // console.log(values);
  };

  const submitForm = (e) => {
    e.preventDefault();
    // console.log(values);
    addPost(values);
    navigate("/myProfile");
    location.reload();
    // setValues("");
  };
  return (
    <div>
      <section>
        <div className="text-3xl fc items-center text-orange-500 my-8">
          Add Your Post
        </div>
      </section>
      <section>
        <div className="bdr m-2 p-2">
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3" controlId="formGrouppostImage">
              <Form.Label>Add Pic</Form.Label>
              <Form.Control
                type="text"
                placeholder="post an image"
                name="postImage"
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupcaption">
              <Form.Label>Add Caption</Form.Label>
              <Form.Control
                type="text"
                placeholder="caption"
                name="caption"
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGrouptagPeople ">
              <Form.Label>Tag Your Friends</Form.Label>
              <Form.Control
                type="text"
                placeholder="tag people"
                name="tagPeople"
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGrouplocation">
              <Form.Label>Add Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="location"
                name="location"
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupmusic">
              <Form.Label>Add Your Song</Form.Label>
              <Form.Control
                type="text"
                placeholder="select a song"
                name="music"
                onChange={inputChangeHandler}
              />
            </Form.Group>
            <Button variant="danger" type="submit">
              Share Post
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default AddPostForm;
