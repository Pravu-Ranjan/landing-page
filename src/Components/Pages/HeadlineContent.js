import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Label, Row } from 'reactstrap';
import { FaArrowRight } from 'react-icons/fa';

function HeadlineContent() {
  return (
    <Fragment>
      <Container fluid className='pt-5'>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <Label className='header-text'>
              Essential Mobile App landing for workspaces
            </Label>
          </Col>
        </Row>
        <Row>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <p className='subheader-text'>
              A mobile app landing page is important and essential for right
              amount of information about your product. Start increasing your
              user base upon the launch of your product
            </p>
          </Col>
        </Row>
        <Row className='pt-5 pb-4'>
          <Col lg={12} className='mx-auto justify-content-center text-center'>
            <Link to='/demos' type='button' className='headline-content-button'>
              <span className=' justify-content-around'>
                Explore Demos
                <FaArrowRight className='ml-3' />
              </span>
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

export default HeadlineContent;
