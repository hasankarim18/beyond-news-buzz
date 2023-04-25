import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavigation from '../Pages/Shared/LeftNavigation/LeftNavigation';
import RightNavigation from '../Pages/Shared/RightNavigation/RightNavigation';
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar';


const Main = () => {
    return (
      <>
        <Header />
        <NavigationBar />
        <Container>
          <Row>
            <Col lg={3} >
                <LeftNavigation />
            </Col>
            <Col lg={6} >
               <Outlet />
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