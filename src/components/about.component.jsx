import React from 'react';
import styles from './Header.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 

const Main = React.createClass({
  render: function() {
    return(
<div>
  <Navbar className={styles.navbarfont }>
     <Navbar.Header>
       <Navbar.Brand>
         <a href="index.html" className={styles.portstyle}>S & L</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="adventure.html" className={styles.travelstyle}>Adventure</NavItem>
        <NavItem eventKey={2} href="www.google.com" className={styles.kitchenstyle}>Culinary Arts</NavItem>
       <NavItem eventKey={3} href="about.html" className={styles.contactstyle} >About</NavItem>
     </Nav>
   </Navbar>
  </div>
  );
  }
  });


module.exports = Main;

