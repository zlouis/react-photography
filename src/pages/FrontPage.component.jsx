import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import styles from './Header.css';
import dropboxapi from '../utility/dropboxapi'
import Masonry from 'react-masonry-component';
import FingerLakes from './Albumset/FingerLakes.album.jsx';
import Album from './album.component.jsx';
import { BrowserRouter as Router, Link, Route, Miss } from 'react-router-dom';
import styles from'./Frontassets/Adventure.css';
import Acadia from './Acadia.component.jsx';
import Scrollchor from 'react-scrollchor';



const masonryOptions = {
    transitionDuration: 0
};



class FrontPage extends Component {


  render() {
const set = "https://docs.google.com/uc?id=0B0huBtqYaof7Y09SMTFISHRLVkE"
const elements = [
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7RV9GNS1uMENmZ3M'}, 
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7Zk5IUk92NTN6VDA'}, 
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7OW9ha20zeEY3ZWM'},
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7bWFYYnZwcmZMQTQ'}, 
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7Y09SMTFISHRLVkE'},
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7bzZROFhtMUNCdHM'}, 
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7Zk5IUk92NTN6VDA'}, 
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7OW9ha20zeEY3ZWM'},
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7bWFYYnZwcmZMQTQ'}, 
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7Y09SMTFISHRLVkE'} 
]
   const childElements = elements.map((element, index) => {
      return (
        <div className="image-element-class">
          <img className={styles.photoSize} src={element.src} />
        </div>

      );
    });

    return(
      <Router>
      <div>
       <div>
        <div id="top"></div>
        <Route path='/frontpage/FingerLakes' component={FingerLakes}/>
        <Route path='/frontpage/Album' component={Album}/>
        <Route path='/frontpage/acadia' component={Acadia}/>
        </div>

        <Row className={styles.albumBreak}>
          <Col md={3} md={3} className={styles.container}>
        <div className={styles.textContainer}>
           <Scrollchor to="top"><Link to='/frontpage/FingerLakes'><img src="https://docs.google.com/uc?id=0B0huBtqYaof7Y1VPdmNEZzFQNkE"  className={styles.album} /></Link></Scrollchor>
            <div >
                 <p className={styles.albumText}> - Finger Lakes, New York - </p>
            </div>
        </div>
          </Col>
          <Col md={3} md={3} className={styles.container}>
        <div className={styles.textContainer}> 
          <Scrollchor to="top"><Link to='/frontpage/album'><img src="https://docs.google.com/uc?id=0B0huBtqYaof7RV9GNS1uMENmZ3M"  className={styles.album} /></Link></Scrollchor>
            <div  className={styles.textContainer}>
                 <p className={styles.albumText} >- Outter Banks, North Carolina -</p>
            </div>
        </div>
          </Col>
                <Col md={3} md={3} className={styles.container}>
        <div className={styles.textContainer}>
          <Scrollchor to="top"><Link to='/frontpage/acadia'><img src="https://docs.google.com/uc?id=0B0huBtqYaof7VVpoc1EwQVRNVzA" className={styles.album } /></Link></Scrollchor>
            <div  className={styles.textContainer}>
                 <p className={styles.albumText} >- Acadia, Maine -</p>
            </div>
        </div>
          </Col>


          </Row>
          <Row>
                      <Col md={3} md={3} className={styles.container}>
        <div className={styles.textContainer}>
          <Scrollchor to="top"><Link to='/frontpage/acadia'><img src="https://docs.google.com/uc?id=0B0huBtqYaof7VVpoc1EwQVRNVzA" className={styles.album } /></Link></Scrollchor>
            <div  className={styles.textContainer}>
                 <p className={styles.albumText} >- Acadia, Maine -</p>
            </div>
        </div>
          </Col>
          </Row>
   


    
      </div>
      </Router>

      )
  }

}

export default FrontPage;
