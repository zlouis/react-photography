import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import styles from './Header.css';
import dropboxapi from '../utility/dropboxapi'
import Masonry from 'react-masonry-component'
import styles from './Frontassets/adventureCover.css'
import Album from './album.component.jsx';
import { BrowserRouter as Router, Link, Route, Miss } from 'react-router-dom';




const masonryOptions = {
    transitionDuration: 0
};

class FrontPage extends Component {

  render() {
    const set = "https://docs.google.com/uc?id=0B0huBtqYaof7Y09SMTFISHRLVkE"
const elements = [
{src: 'https://docs.google.com/uc?id=0B0huBtqYaof7bzZROFhtMUNCdHM'}, 
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
        <Link to='/frontpage/album'><img src="https://docs.google.com/uc?id=0B0huBtqYaof7bzZROFhtMUNCdHM" className={styles.photoSize} /></Link>

        
        <Route path='/frontpage/album' component={Album}/>



    
      </div>
      </Router>

      )
  }

}

export default FrontPage;

            // <Masonry
            //     className={'my-gallery-class'}  
            //     elementType={'ul'}  
            //     options={masonryOptions}  
            //     disableImagesLoaded={false}  
            //     updateOnEachImageLoad={false}  
            // >
            //     {childElements}
            // </Masonry>