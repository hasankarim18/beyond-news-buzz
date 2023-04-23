import moment from 'moment/moment';
import React from 'react';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaRegBookmark, FaRegEye, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import Rating from 'react-rating';

const NewsCard = ({news}) => {
   
    const { title, _id, details, image_url, author, total_view, rating } = news;
    return (
      <Card className="mb-4">
        <Card.Header className="d-flex align-items-center " as="div">
          <Image
            style={{ width: "40px", height: "40px" }}
            roundedCircle
            src={author?.img}
          />
          <div className="d-flex ms-3 align-items-center flex-grow-1 justify-content-between">
            <div className="d-flex flex-column gap-2 ">
              <span>{author?.name}</span>
              <span>
                {" "}
                {/* {moment(author?.published_date).format('YYYY-MMM-D')} {} */}
                {moment(author?.published_date).format("YYYY-MM-D")}
              </span>
            </div>
            <div>
              <span>
                {" "}
                <FaRegBookmark />{" "}
              </span>
              <span>
                {" "}
                <FaBookmark />{" "}
              </span>
              <span>
                {" "}
                <FaShareAlt />{" "}
              </span>
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img varient="top" src={image_url} />
          <Card.Text>
            {details.length < 250 ? (
              details
            ) : (
              <>
                {" "}
                {details.slice(0, 250)}...{" "}
                <Link to={`/news/${_id}`}>Read more</Link>{" "}
              </>
            )}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex flex-grow-1 justify-content-between ">
            <div>
              <Rating
                readonly
                placeholderRating={rating.number}
                emptySymbol={<FaRegStar className="text-warning fs-5" />}
                placeholderSymbol={<FaStar className="text-warning fs-5" />}
                // fullSymbol={
                //   <FaStar />
                // }
              />
            </div>
            <div>
              <span>
                <FaRegEye />
              </span>{" "}
              <span> {total_view} </span>
            </div>
          </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;