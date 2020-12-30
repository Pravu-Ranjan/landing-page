import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Label, Row } from 'reactstrap';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
function Footer() {
  return (
    <Fragment>
      <Container className='footer mt-5' fluid>
        <Row className='d-flex justify-content-between p-4'>
          <Col xl={5}>
            <Label className='footer-text'>Suscribe our newsletter</Label>
            <p className='footer-subtext'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col xl={3} className='mt-4'>
            <div className='group'>
              <input type='text' required />
              <span className='highlight'></span>
              <span className='bar'></span>
              <label className='label-text'>Email Address</label>
            </div>
          </Col>
          <Col
            xl={2}
            className='mx-auto justify-content-center text-center mt-4'
          >
            <Link to='/demos' type='button' className='footer-content-button'>
              <span className=' justify-content-around'>Get Access</span>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container className='mt-3' fluid>
        <Row className='d-flex justify-content-between p-4'>
          <Col md={4} className='last-text'>
            Soprano
          </Col>
          <Col md={4} className='text-center mx-auto'>
            <AiOutlineTwitter className='social-icon mr-4' />
            <FaFacebookSquare className='social-icon mr-4' />
            <AiFillInstagram className='social-icon' />
          </Col>
          <Col md={4} className='text-right last-text'>
            Copyright 2020 Soprano.ai
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Footer;
