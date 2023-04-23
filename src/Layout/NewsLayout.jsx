import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNavigation from '../Pages/Shared/RightNavigation/RightNavigation';
import Footer from '../Pages/Shared/Footer/Footer';

const NewsLayout = () => {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col lg={9}>
              {/* <Outlet /> */}
              <h1>News details Main Lay out</h1>
              <Outlet />
            </Col>
            <Col lg={3}>
              <RightNavigation />
            </Col>
          </Row>
        </Container>
        {/* <Outlet /> */}
        <Footer />
      </>
    );
};

export default NewsLayout;