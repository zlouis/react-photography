import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col, Fade } from 'react-bootstrap'; 
import styles from './css/Header.css';
import Lightbox from 'react-image-lightbox';


const images = [
    'https://docs.google.com/uc?id=0B0huBtqYaof7NGRoLUsyc0o0YVE',
    'https://docs.google.com/uc?id=0B0huBtqYaof7WVNjMjNMZTY3UDg',
    'https://docs.google.com/uc?id=0B0huBtqYaof7c1VnMFpHelRkMDQ',
    '//placekitten.com/1500/1500'
];

export default class Home extends Component {
 constructor(props) {
        super(props);

        this.state = {
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
      
        <Carousel >
    <Carousel.Item width={900} height={500} alt="900x500" className={styles.carouselPosition} className={styles.carouselcontrol} >
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7c0dpVFdGbGl0MWs"/>

    </Carousel.Item>
    <Carousel.Item className={styles.carouselPosition}>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7MVAySV9jME9TWWM"/>

    </Carousel.Item>
    <Carousel.Item className={styles.carouselPosition}>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7N250S3JicmxxNmM"/>

    </Carousel.Item>
        <Carousel.Item className={styles.carouselPosition}>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7MDF5Vm1VYWhoY3M"/>

    </Carousel.Item>
        <Carousel.Item className={styles.carouselPosition}>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7X1ROMUxRMjVsN00"/>
 
    </Carousel.Item>
  </Carousel>

</Row>
</Grid>

<Grid>
  <Row>
   <Col md={6} md={4} className={styles.topImage}>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7TkNsSjdNVEFLU00" onClick={() => this.setState({ isOpen: true })} />
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
      <Col md={6} md={4} className={styles.topImage}>
        <img src="https://docs.google.com/uc?id=0B0huBtqYaof7RUZJVXZVVzQtQjQ" onClick={() => this.setState({ isOpen: true })} />
     
    </Col>
   
        <Col md={6} md={4} className={styles.topImage}>
        <img src="https://docs.google.com/uc?id=0B0huBtqYaof7dE1peDRETXNKWDQ" onClick={() => this.setState({ isOpen: true })} />
      </Col>
  </Row>


</Grid>
</div>


    )
}
}
