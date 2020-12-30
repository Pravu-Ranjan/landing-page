import React, { Fragment } from 'react';
import {
  Card,
  CardImg,
  CardText,
  Col,
  Container,
  Label,
  Row,
} from 'reactstrap';

const cardImg = [
  {
    url: require('../../Assets/landing1.jpg').default,
    text: 'Website Landing',
  },
  {
    url: require('../../Assets/landing2.jpg').default,
    text: 'App Modern Landing',
  },
];

function MidlineContent() {
  return (
    <Fragment>
      <Container fluid className='pt-3'>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <Label className='header-text'>Explore our demos</Label>
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
          {cardImg ? (
            cardImg.map((value, key) => (
              <Col md={4} key={key}>
                <Card className='demo-card'>
                  <CardImg
                    className='demo-img'
                    src={value.url}
                    alt='Card image cap'
                  ></CardImg>
                </Card>
                <CardText className='card-text'>{value.text}</CardText>
              </Col>
            ))
          ) : (
            <span></span>
          )}
        </Row>
        <Row className='pt-2 pb-2'>
          <Col lg={12}>
            <hr className='row1' />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default MidlineContent;
