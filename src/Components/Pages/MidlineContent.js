import React, { Fragment } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Col,
  Container,
  Label,
  Row,
} from 'reactstrap';

function MidlineContent() {
  return (
    <Fragment>
      <Container fluid className='pt-3'>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <Label className='header-text'>Explore out demos</Label>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <p className='subheader-text'>
              Explore our landing pade demos on different topics. More Demos are
              comming soon.
            </p>
          </Col>
        </Row>
        <Row className='pt-3 d-flex justify-content-center'>
          <Col md={4}>
            <Card inverse>
              <CardImg
                className='demo-card'
                src={
                  'https://blogassets.techpikk.com/uploads/2018/01/Landeux.png'
                }
                alt='Card image cap'
              />
            </Card>
            <CardText className='card-text'>Website landing</CardText>
          </Col>
          <Col md={4}>
            <Card inverse>
              <CardImg
                className='demo-card'
                src={
                  'https://blogassets.techpikk.com/uploads/2018/01/Landeux.png'
                }
                alt='Card image cap'
              />
            </Card>
            <CardText className='card-text'>App Modern landing</CardText>
          </Col>
        </Row>
        <Row className='pt-2'>
          <Col lg={12}>
            <hr className='row1' />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default MidlineContent;
