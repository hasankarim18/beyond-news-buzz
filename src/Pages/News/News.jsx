import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import EditorsInsights from './EditorsInsights/EditorsInsights';

const News = () => {
    const navigate = useNavigate()

    const handlerAllNewsBtn = ()=> {
        navigate(`/category/${category_id}`)
    }

   const news = useLoaderData()
   const { details, image_url, title, category_id } = news;
    return (
      <>
        <Card style={{ width: "100%" }}>
          <Card.Img variant="top" src={image_url} className="img-fluid" />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
            <Button
              onClick={handlerAllNewsBtn}
              className="d-flex align-items-center gap-2"
              variant="danger"
            >
              <FaArrowLeft /> <span>All news in this category</span>{" "}
            </Button>
          </Card.Body>
        </Card>
        <div className="mt-4">
          <EditorsInsights />
        </div>
      </>
    );
};

export default News;