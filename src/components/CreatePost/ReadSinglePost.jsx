import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from '../TestImage/TestImage.json'
import { Link } from "react-router-dom";

const ReadSinglePost = () => {
    // console.log(Data[0].image)
  return (
    <div>
      i m read single post
      <div className='flex justify-center items-center'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Data[0].image} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Link to="/updatePost">
        <Button className='mt-2 mx-2' variant="primary">Update Post</Button>
          </Link>
        <Button className='mt-2' variant="primary">Delete Post</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default ReadSinglePost
