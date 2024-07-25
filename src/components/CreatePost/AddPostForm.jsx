import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const AddPostForm = () => {
  return (
    <div>
      <div className="bdr m-2 p-2">
        <Form>
          <Form.Group className="mb-3" controlId="formGrouppostImage">
            <Form.Label>IMAGE</Form.Label>
            <Form.Control
              type="text"
              placeholder="postImage"
              name="postImage"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupcaption">
            <Form.Label>caption</Form.Label>
            <Form.Control type="text" placeholder="caption" name="caption" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGrouptagPeople">
            <Form.Label>tagPeople</Form.Label>
            <Form.Control
              type="text"
              placeholder="tagPeople"
              name="tagPeople"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGrouplocation">
            <Form.Label>location</Form.Label>
            <Form.Control type="text" placeholder="location" name="location" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupmusic">
            <Form.Label>music</Form.Label>
            <Form.Control type="text" placeholder="Enter music" name="music" />
          </Form.Group>
          <Link to="/readPost">
            <Button variant="danger">Share Post</Button>
          </Link>
        </Form>
      </div>
    </div>
  );
};

export default AddPostForm;
