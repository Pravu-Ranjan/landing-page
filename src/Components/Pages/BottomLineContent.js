import React, { Fragment } from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Col,
  Container,
  Label,
  Row,
} from 'reactstrap';

function BottomLineContent() {
  return (
    <Fragment>
      <Container fluid className='pt-3'>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <Label className='header-text'>
              What clients says about our project
            </Label>
          </Col>
        </Row>
        <Row className='pt-3 d-flex justify-content-center'>
          <Col md={6}>
            <Card className='bottom-card'>
              <CardBody className='d-flex justify-content-around'>
                <img
                  src='https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-9.jpg'
                  alt='Avatar'
                  className='img-style'
                />

                <CardTitle className='card-text pt-4'>Maria</CardTitle>
              </CardBody>
              <CardText className='card-text-new text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardText>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='bottom-card'>
              <CardBody className='d-flex justify-content-around'>
                <img
                  src='https://expertphotography.com/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg'
                  alt='Avatar'
                  className='img-style'
                />

                <CardTitle className='card-text pt-4'>Alex</CardTitle>
              </CardBody>
              <CardText className='card-text-new text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default BottomLineContent;
