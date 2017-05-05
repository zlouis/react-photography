import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col, Fade } from 'react-bootstrap'; 
import styles from './css/About.css';
import Lightbox from 'react-images';

export default class About extends Component {


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

        <Lightbox
        images={[
          { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7UUJwc0pBR2ZEYmM' 
        },
         { 
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7RjRsM2pObVh6ZjA' 
        },
        {
          src: 'https://docs.google.com/uc?id=0B0huBtqYaof7MmNNWUd5eExXeVk'
        }
        ]}


        currentImage={this.state.currentImage}
        onClickImage={this.handleClickImage}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
        theme={theme} />
        <Grid>
          <Row className={styles.paragraphSeperate}>
            <Col md={6} md={6}>
              <p> Samiah Moustafa's BIO</p>
              <p> Samiah Moustafa's BIO</p>
            </Col>

          </Row>

          <Row className={styles.paragraphSeperate}> 
            <Col md={6} md={6}>
              <p> Louis Huang is a New York born, Taiwanese photographer whose work is potrayed through his adventurous travels. Seeking to capture the tranqulity
               of nature itself, Huang creates authentic spectacles and experiences as they unfold before him.</p>

               <p> Huang is based in New Jersey, however he can never sit still; planning for the next journey into the reaches of the world with his partner Samiah Moustafa.</p>
             </Col>
          </Row>
          </Grid>
          <Grid>
          <Row>
            <Col md={3} md={4}>
            <img src="https://docs.google.com/uc?id=0B0huBtqYaof7UUJwc0pBR2ZEYmM" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true })}  />               
            </Col>
              <Col md={3} md={4}>
            <img src="https://docs.google.com/uc?id=0B0huBtqYaof7RjRsM2pObVh6ZjA" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true, currentImage: 1 })}  />               
            </Col>
              <Col md={3} md={4}>
            <img src="https://docs.google.com/uc?id=0B0huBtqYaof7MmNNWUd5eExXeVk" className={styles.mouse} onClick={() => this.setState({ lightboxIsOpen: true, currentImage: 2 })}  />               
            </Col>
            </Row>
         </Grid>

          </div>
    )
}
}





