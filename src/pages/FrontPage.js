import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
// import styles from './Header.css';
import dropboxapi from '../utility/dropboxapi'

const FrontPage = React.createClass({
  render: function() {
    return(
      <div>
        <div>
           <h1> front page </h1>
           <img src="https://docs.google.com/uc?id=0B0huBtqYaof7R1BlT3N5dFVUeUk" />
        </div>
      </div>

      )
  }
});

module.exports = FrontPage;