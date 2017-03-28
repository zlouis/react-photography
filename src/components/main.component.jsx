import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Link, Route, Miss } from 'react-router-dom';
import FrontPage from '../pages/FrontPage.component.jsx';
import Home from './home.component.jsx';
import Adventure from './adventure.component.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 
import styles from './Header.css';



const Main =() => {
    return (

     <Router>
      <div>
            <Navbar className={styles.navbarfont }>
              <Navbar.Header>
                 <Navbar.Brand>
                  <Link to='/' className={styles.portstyle}> S & L</Link>
                 </Navbar.Brand>
              </Navbar.Header>
              <Nav activeKey={1}>
                <Link to='/adventure'> Adventure</Link>
                <Link to='/kitchen'>Kitchen</Link>
                <Link to='/about'>About</Link>
              </Nav>
              </Navbar>
      
      </div>
    </Router>

    )
}

export default Main;