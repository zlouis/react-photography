import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col, Fade } from 'react-bootstrap'; 
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
        <Carousel >
    <Carousel.Item className={styles.carouselPosition} className={styles.carouselcontrol} >
     <img  className={styles.carouselPosition} src="https://docs.google.com/uc?id=0B0huBtqYaof7c0dpVFdGbGl0MWs"/>

    </Carousel.Item>
    <Carousel.Item className={styles.carouselPosition}>
      <img  src="https://docs.google.com/uc?id=0B0huBtqYaof7MVAySV9jME9TWWM"/>

    </Carousel.Item>
    <Carousel.Item className={styles.carouselPosition}>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7N250S3JicmxxNmM"/>

    </Carousel.Item>
        <Carousel.Item className={styles.carouselPosition}>
      <img   src="https://docs.google.com/uc?id=0B0huBtqYaof7MDF5Vm1VYWhoY3M"/>

    </Carousel.Item>
        <Carousel.Item className={styles.carouselPosition}>
      <img  src="https://docs.google.com/uc?id=0B0huBtqYaof7X1ROMUxRMjVsN00"/>
 
    </Carousel.Item>
  </Carousel>
</Col>
</Row>
</Grid>

<Grid>
  <Row>
   <Col md={6} md={4} className={styles.topImage}>
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


