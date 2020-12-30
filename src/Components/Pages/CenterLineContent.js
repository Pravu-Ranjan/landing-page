import React, { Fragment } from 'react';
import { Card, CardBody, Col, Container, Label, Row } from 'reactstrap';
import { RiEarthFill } from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { BiSmile } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const centerContentItem = [
  {
    icon: <RiEarthFill />,
    label: `Enjoy your benifits`,
    text: ` Get set up with the help of a trusted freelancer or a agency
    from the Shopify Experts Marketplaces.`,
  },
  {
    icon: <BsPeopleFill />,
    label: `Switch to Soprano`,
    text: `Bring your business to Soprano, no matter which ecommerce
    platform you are currently using.`,
  },
  {
    icon: <BiSmile />,
    label: `Move your business online`,
    text: `create a business whether you're got a fresh idea or are looking for a new way to make money.`,
  },
];
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
        <Row className='d-flex justify-content-center text-center'>
          {centerContentItem ? (
            centerContentItem.map((value, key) => (
              <Col md={3} key={key}>
                <Card className='border-0'>
                  <CardBody className='mx-auto'>
                    <span className='card-icon'>{value.icon}</span>
                    <Label className='card-text'>{value.label}</Label>
                    <p>{value.text}</p>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <span></span>
          )}
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
