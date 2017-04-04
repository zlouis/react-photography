import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
import { BrowserRouter as Router, Link, Route, Miss } from 'react-router-dom';
import FrontPage from '../pages/FrontPage.component.jsx';
import Home from './home.component.jsx';
import Adventure from './adventure.component.jsx';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col } from 'react-bootstrap'; 
import styles from './css/Header.css';




const Main =() => {
    return (

     <Router>
      <div>

<Navbar collapseOnSelect className={styles.navBackground}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'> S & L </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><Link to='/adventure' className={[styles.navAdventure], [styles.headerLinks]}> Adventure</Link></NavItem>
        <NavItem eventKey={2} href="#"><Link to='/kitchen' className={styles.headerLinks}> About</Link></NavItem>
          <hr/>
            <Router exactly pattern='/' component={Home}/>
            <Router pattern='/adventure' component={Adventure}/>
            <Router pattern='/about' component={Home}/> 
      </Nav>
       </Navbar.Collapse>
  </Navbar>
    <Row>
      <Col sm={6} md={6} >
        <Carousel>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://docs.google.com/uc?id=0B0huBtqYaof7d0s1N0NRZllwakE"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://docs.google.com/uc?id=0B0huBtqYaof7MVAySV9jME9TWWM"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://docs.google.com/uc?id=0B0huBtqYaof7N250S3JicmxxNmM"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
        <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://docs.google.com/uc?id=0B0huBtqYaof7MDF5Vm1VYWhoY3M"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
        <Carousel.Item>
      <img width={900} height={500} alt="900x500" src="https://docs.google.com/uc?id=0B0huBtqYaof7X1ROMUxRMjVsN00"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</Col>
</Row>



      
      </div>
    </Router>



    )
}

export default Main;


