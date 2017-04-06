import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Link, Route, Miss } from 'react-router-dom';
import FrontPage from './pages/FrontPage.component.jsx';
import Home from './components/home.component.jsx';
import Adventure from './components/adventure.component.jsx';
import { Navbar, Nav, NavItem, Carousel,Grid, Row, Col } from 'react-bootstrap'; 
import styles from './components/css/Header.css';
import About from './components/about.component.jsx';

import Main from './components/main.component.jsx';

ReactDOM.render(
       <Router>
      <div>

<Navbar  className={styles.navBackground}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'> S & L </Link> 
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem><Link to='/FrontPage' className={[styles.navAdventure], [styles.headerLinks]}> Adventure</Link></NavItem>
        <NavItem><Link to='/about' className={styles.headerLinks}> About</Link></NavItem>
      </Nav>
       </Navbar.Collapse>
  </Navbar>
         
            <Route exact path='/' component={Home}/>
            <Route path='/frontpage' component={FrontPage}/>
            <Route path='/about' component={About}/> 
  </div>

  </Router>,
        document.getElementById("contents")
    )