import React from 'react';
import styles from './Header.css';

var Header = React.createClass({
  render: function() {
    return(
  <div>
          <nav className="navbar">
           <div className="container-fluid"> 
            <div className="headerLinks">
              <a href="index.html" className={styles.portstyle} > S & L </a>
              <a href="adventure.html" className={styles.travelstyle}> Adventure </a> 
              <a href="www.google.com" className={styles.kitchenstyle}> Culinary Arts </a> 
              <a href="about.html" className={styles.contactstyle}> About</a> 
            </div>
           </div>
          </nav>
  </div>
  );
  }
  });
module.exports = Header;