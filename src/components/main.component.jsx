import React, { Component } from 'react';
import { render } from 'react-dom';

// Import routing components
import { BrowserRouter as Router, Link, Route, Miss } from 'react-router-dom';
import FrontPage from '../pages/FrontPage.component.jsx';
import Home from './home.component.jsx';
import Adventure from './adventure.component.jsx';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 
import styles from './css/Header.css';




const Main =() => {
    return (

     <Router>
      <div>

<Navbar collapseOnSelect className={styles.navBackground}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'> S & L </Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#"><Link to='/adventure' className={[styles.navAdventure], [styles.headerLinks]}> Adventure</Link></NavItem>
        <NavItem eventKey={2} href="#"><Link to='/kitchen'> About</Link></NavItem>
          <hr/>
            <Router exactly pattern='/' component={Home}/>
            <Router pattern='/adventure' component={Adventure}/>
            <Router pattern='/about' component={Home}/> 
      </Nav>
       </Navbar.Collapse>
  </Navbar>
      
      </div>
    </Router>

    )
}

export default Main;


