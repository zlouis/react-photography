import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './stylings/generalstyles.css';

const FingerLakes = ({params}) => {



    return (
        <div>
        <Grid>
          <Row >
             <Col md={3} md={3} className={styles.spaceIt}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7NnBBTjFZclRZcG8"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3} className={styles.spaceIt}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7dmlmS0ZhRWdLSmM"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3} className={styles.spaceIt}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7RGZObjNjVVBxT3M"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3} className={styles.spaceIt}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7WlFPMmpBdUVvazA"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3} className={styles.spaceIt}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7bklIdmUwY0tlVWc"/>
            </Col>  
          </Row>
            <Row>
             <Col md={3} md={3} className={styles.spaceIt}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7LWtwaHlUVkFXOEE"/>
            </Col>  
          </Row>
          </Grid>
         
      </div>
    );
};

export default FingerLakes;