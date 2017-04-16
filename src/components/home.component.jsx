import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col } from 'react-bootstrap'; 
import styles from './css/Header.css';
import Lightbox from 'react-image-lightbox';


const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500'
];

export default class Home extends Component {
 constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }

    render() {
            const {
            photoIndex,
            isOpen,
        } = this.state;


  return(
    <div>
           <Grid>
    <Row >
      <Col md={6} md={12}>
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

<Grid>
  <Row>
   <Col md={6} md={4} >
      <img src="http://placehold.it/291x363" onClick={() => this.setState({ isOpen: true })} />
      {isOpen &&
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}

                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() => this.setState({
                            photoIndex: (photoIndex + images.length - 1) % images.length,
                        })}
                        onMoveNextRequest={() => this.setState({
                            photoIndex: (photoIndex + 1) % images.length,
                        })}
                    />
                }
    </Col>
  </Row>


</Grid>
</div>


    )
}
}


