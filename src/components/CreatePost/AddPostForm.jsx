import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAddPostMutation } from "../../redux/features/apiSlices/createPostSlice";

const AddPostForm = () => {
  const [values, setValues] = useState({
    postImage: "",
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
    navigate("/readPost");
    location.reload();
    // setValues("");
  };
  return (
    <div>
      <div className="bdr m-2 p-2">
        <Form onSubmit={submitForm}>
          <Form.Group className="mb-3" controlId="formGrouppostImage">
            <Form.Label>IMAGE</Form.Label>
            <Form.Control
              type="text"
              placeholder="postImage"
              name="postImage"
              onChange={inputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupcaption">
            <Form.Label>caption</Form.Label>
            <Form.Control
              type="text"
              placeholder="caption"
              name="caption"
              onChange={inputChangeHandler}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formGrouptagPeople "
          >
            <Form.Label>tagPeople</Form.Label>
            <Form.Control
              type="text"
              placeholder="tagPeople"
              name="tagPeople"
              onChange={inputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGrouplocation">
            <Form.Label>location</Form.Label>
            <Form.Control
              type="text"
              placeholder="location"
              name="location"
              onChange={inputChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupmusic">
            <Form.Label>music</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter music"
              name="music"
              onChange={inputChangeHandler}
            />
          </Form.Group>
          {/* <Link to="/readPost">
            
          </Link> */}
          <Button variant="danger" type="submit">
            Share Post
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddPostForm;
