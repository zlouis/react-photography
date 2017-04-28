import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


const Album = ({params}) => {
    return (
        <div>
        <Grid>
          <Row >
             <Col md={3} md={3}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7YXE3SVN0V19CdE0"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7V0hNLXJyUkxPa00"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7dzRRdzlxaktSUTQ"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7ZjJ2QmZ1NWpuR2M"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7V1N0SUVfdVBuQlE"/>
            </Col>  
          </Row>
           <Row>
             <Col md={3} md={3}>
              <img src="https://docs.google.com/uc?id=0B0huBtqYaof7T1NMMTdfNlBROTg"/>
            </Col>  
          </Row>
          </Grid>
      </div>
    );
};

export default Album;