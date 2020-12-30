import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [active, setActive] = useState('');

  const handleActiveNav = (e) => {
    e.persist();
    let id = e.target.id;
    setActive(id);
    console.log(active, 'dnjks');
  };
  console.log(active, 'dnjkssadas');
  return (
    <div>
      <div>
        <Navbar color='light' light expand='xl' fixed='top'>
          <NavbarBrand href='/'>Soprano</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='ml-auto ml-5' navbar>
              <NavItem className='mr-5'>
                <NavLink onClick={handleActiveNav}>
                  <Link to='/home' id='item1' className='appbar-item'>
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className='mr-5'>
                <NavLink onClick={handleActiveNav}>
                  <Link to='/product' id='item2' className='appbar-item'>
                    Products
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className='mr-5'>
                <NavLink onClick={handleActiveNav}>
                  <Link to='/about' id='item3' className='appbar-item'>
                    About Us
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className='mr-5'>
                <NavLink onClick={handleActiveNav}>
                  <Link to='/demo' id='item4' className='appbar-item'>
                    Demos
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem className='mr-5'>
                <NavLink onClick={handleActiveNav}>
                  <Link to='/contact' id='item5' className='appbar-item'>
                    Contact Us
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
}

export default AppHeader;
