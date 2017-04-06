import React from 'react';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col } from 'react-bootstrap'; 
import styles from './css/Header.css';


const Home =() => {
  return(
    <div>
           <Grid>
    <Row >
      <Col md={6} md={12} className={styles.carouselPosition} >
        <Carousel>
    <Carousel.Item>
      <img  alt="900x500" src="https://docs.google.com/uc?id=0B0huBtqYaof7d0s1N0NRZllwakE"/>
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue moll is interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7MVAySV9jME9TWWM"/>
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img  src="https://docs.google.com/uc?id=0B0huBtqYaof7N250S3JicmxxNmM"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
        <Carousel.Item>
      <img  src="https://docs.google.com/uc?id=0B0huBtqYaof7MDF5Vm1VYWhoY3M"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
        <Carousel.Item>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7X1ROMUxRMjVsN00"/>
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</Col>
</Row>
</Grid>
</div>
    )
}

export default Home;