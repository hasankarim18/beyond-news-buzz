import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavigation from '../Pages/Shared/LeftNavigation/LeftNavigation';
import RightNavigation from '../Pages/Shared/RightNavigation/RightNavigation';


const Main = () => {
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col lg={3} >
                <LeftNavigation />
            </Col>
            <Col lg={6} >
                Main componnent comming
            </Col>
            <Col lg={3} >
                <RightNavigation />
            </Col>
          </Row>
        </Container>
        {/* <Outlet /> */}
        <Footer />
      </>
    );
};

export default Main;