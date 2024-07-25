import React from 'react'
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReadSinglePost from './ReadSinglePost';

const ReadPost = () => {
  return (
    <div>
      i m read post page
    <div>
    <Link to="/addPost">
            <Button variant="danger"> Create Post</Button>
          </Link>
    </div>
    <div>
        <ReadSinglePost/>
    </div>
    </div>
  )
}

export default ReadPost
