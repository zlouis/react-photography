import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
// import styles from './Header.css';
import dropboxapi from '../utility/dropboxapi'
import Masonry from 'react-masonry-component'
import styles from './Frontassets/adventureCover.css'

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
      <div>
        
            <Masonry
                className={'my-gallery-class'} // default ''
                elementType={'ul'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
            >
                {childElements}
            </Masonry>

    
      </div>

      )
  }

}

export default FrontPage;

