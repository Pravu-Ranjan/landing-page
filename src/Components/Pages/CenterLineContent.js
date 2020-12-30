import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Label, Row } from 'reactstrap';
import { RiEarthFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { BiSmile } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function CenterLineContent() {
  return (
    <Fragment>
      <Container fluid className='pt-3'>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <Label className='header-text'>
              Start your business journey with Soprano
            </Label>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <p className='subheader-text'>
              Try shopify for free, and explore all the tools and services you
              need to start, run, and grow your business.
            </p>
          </Col>
        </Row>
        <Row className='pt-3 d-flex justify-content-center text-center'>
          <Col md={3}>
            <Card>
              <CardBody className='mx-auto'>
                <RiEarthFill className='card-icon' />
                <Label className='card-text'>Move your business online</Label>
                <p>
                  create a business whether you're got a fresh idea or are
                  looking for a new way to make money.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody className='mx-auto'>
                <BsPeopleFill className='card-icon' />
                <Label className='card-text'>Switch to Soprano</Label>
                <p>
                  Bring your business to Soprano, no matter which ecommerce
                  platform you are currently using.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardBody className='mx-auto'>
                <BiSmile className='card-icon' />
                <Label className='card-text'>Enjoy your benifits</Label>
                <p>
                  Get set up with the help of a trusted freelancer or a agency
                  from the Shopify Experts Marketplaces.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='pt-5 pb-4'>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <Link to='/demos' type='button' className='headline-content-button'>
              <span className=' justify-content-around'>Start Free Trail</span>
            </Link>
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

export default CenterLineContent;
