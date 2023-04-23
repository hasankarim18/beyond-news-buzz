import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import first from '../../../assets/1.png'
import second from '../../../assets/2.png'
import third from '../../../assets/3.png'

const EditorsInsights = () => {
  const arr = [first, second, third]

  const showCard = arr.map((item,i) => {
    return (
      <Card className="border-none"  key={i} >
        <Card.Img className="img-fluid" variant="top" src={item} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
  })

    return (
      <>
        {" "}
        <h2>Editors Insight</h2>
        <CardGroup className="gap-2">
          {showCard}        
        </CardGroup>
      </>
    );
};

export default EditorsInsights;