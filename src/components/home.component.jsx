import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col } from 'react-bootstrap'; 
import styles from './css/Header.css';
import Lightbox from 'react-images';



export default class Home extends Component {


 constructor() {
    super();
    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

  }

  openLightbox (index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  gotoImage (index) {
    this.setState({
      currentImage: index,
    });
  }
  handleClickImage () {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery () {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
      return (
        <a
          href={obj.src}
          className={css(classes.thumbnail, classes[obj.orientation])}
          key={i}
          onClick={(e) => this.openLightbox(i, e)}
        >
          <img src={obj.thumbnail} className={css(classes.source)} />
        </a>
      );
    });
  } 

    render() {
            const {
            photoIndex,
            lightboxIsOpen,
            currentImage,
        } = this.state;

const theme = {
  // container
  container: { background: 'rgba(255, 255, 255, 0.9)' },

  // arrows
  arrow: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',

    ':hover': {
      opacity: 1,
    },
  },
  arrow__size__medium: {
    borderRadius: 40,
    height: 40,
    marginTop: -20,

    '@media (min-width: 768px)': {
      height: 70,
      padding: 15,
    },
  },
  arrow__direction__left: { marginLeft: 10 },
  arrow__direction__right: { marginRight: 10 },

  // header
  close: {
    fill: '#D40000',
    opacity: 0.6,
    transition: 'all 200ms',

    ':hover': {
      opacity: 1,
    },
  },

  // footer
  footer: {
    color: 'black',
  },
  footerCount: {
    color: 'rgba(0, 0, 0, 0.6)',
  },

  // thumbnails
  thumbnail: {
  },
  thumbnail__active: {
    boxShadow: '0 0 0 2px #00D8FF',
  },
};


  return(
    <div>
          <Grid>
    <Row >
      
        <Carousel>
    <Carousel.Item>
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7c0dpVFdGbGl0MWs"/>

    </Carousel.Item>
    <Carousel.Item>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7MVAySV9jME9TWWM"/>

    </Carousel.Item>
    <Carousel.Item>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7N250S3JicmxxNmM"/>

    </Carousel.Item>
        <Carousel.Item>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7MDF5Vm1VYWhoY3M"/>

    </Carousel.Item>
        <Carousel.Item>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7X1ROMUxRMjVsN00"/>
 
    </Carousel.Item>
  </Carousel>

</Row>
</Grid>

        <Lightbox
        images={[
          { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7bWhuamt2aTNwTW8' 
        },
         { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7M0Q0NFV0WHFFR2s' 
        },
        {
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7Zm9rWWxXams4Ync'
        },
        { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7WjlRcFBWOVRZaXM' 
        },
         { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7M0Q0NFV0WHFFR2s' 
        },
           { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7cGFiR3VHMXBpUHc' 
        },
        {
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7Zm9rWWxXams4Ync'
        },
        { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7bWhuamt2aTNwTW8' 
        },
         { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7M0Q0NFV0WHFFR2s' 
        },
           { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7M0Q0NFV0WHFFR2s' 
        },
        {
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7Zm9rWWxXams4Ync'
        },
        { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7bWhuamt2aTNwTW8' 
        },
         { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7M0Q0NFV0WHFFR2s' 
        },
        ]}


        currentImage={this.state.currentImage}
        onClickImage={this.handleClickImage}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
        theme={theme} />

             
       
<section className={styles.barBreak}></section>
<Grid>
  <Row>
   <Col md={6} md={4} >
    <div>
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7UTVJdkxyRzFFSzA" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true })} />
    </div>
    </Col>
    <Col md={6} md={4} >
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7NFV6Nnpkalk5cEU" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true,  currentImage: 1  })} />
    </Col>
    <Col md={6} md={4} >
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7dU9qZ2ZHekRFNms" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true, currentImage: 2 })}  />
    </Col>
  </Row>
    <Row>
   <Col md={6} md={4} >
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7MkhiNnhldGhrd1U" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true, currentImage: 3 })} />
    </Col>
    <Col md={6} md={4}>
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7QmMxZXdEQVMwcG8" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true,  currentImage: 4  })} />
    </Col>
    <Col md={6} md={4}>
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7N1ItbWh1cU51OUk" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true, currentImage: 5 })}  />
    </Col>
  </Row>
    <Row>
   <Col md={6} md={4} >
      <img src="https://docs.google.com/uc?id=0B0huBtqYaof7UTVJdkxyRzFFSzA" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true, currentImage: 6 })} />
    </Col>
    <Col md={6} md={4}>
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7NFV6Nnpkalk5cEU" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true,  currentImage: 7  })} />
    </Col>
    <Col md={6} md={4}>
     <img src="https://docs.google.com/uc?id=0B0huBtqYaof7dU9qZ2ZHekRFNms" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true, currentImage: 8 })}  />
    </Col>
  </Row>


</Grid>
</div>


    )
}
}
