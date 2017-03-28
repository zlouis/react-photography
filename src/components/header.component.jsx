import React, {Component} from 'react';
import { Link } from 'react-router';
import styles from './Header.css';
import { Navbar, Nav, NavItem } from 'react-bootstrap'; 

// const Main = React.createClass({
//   render: function() {
//     return(
// <div>
//   <Navbar className={styles.navbarfont }>
//      <Navbar.Header>
//        <Navbar.Brand>
//          <a href="index.html" className={styles.portstyle}>S & L</a>
//         </Navbar.Brand>
//       </Navbar.Header>
//       <Nav>
//         <NavItem eventKey={1} href="adventure.html" className={styles.travelstyle}>Adventure</NavItem>
//         <NavItem eventKey={2} href="www.google.com" className={styles.kitchenstyle}>Culinary Arts</NavItem>
//        <NavItem eventKey={3} href="about.html" className={styles.contactstyle} >About</NavItem>
//      </Nav>
//    </Navbar>
//   </div>
//   );
//   }
//   });


// module.exports = Main;

class Header extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">noobs</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                {/* Change from a to Link */}
                                <li><Link to="/" activeClassName="active">Home</Link></li>
                                <li><Link to="/frontPage" activeClassName="active">Cars</Link></li>
                                <li><Link to="/adventure" activeClassName="active">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Header