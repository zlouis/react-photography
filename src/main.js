import React from 'react';
import { render } from 'react-dom';
// import Counter from './Counter';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Header from './components/Header';
import FrontPage from './pages/FrontPage';


 

//working code below
// ReactDOM.render(
// <div>
//   <Header />

//   <FrontPage />


// </div> , document.getElementById("main")
//   );

render(
  <Router>
      <Route path='/' component={Header} history={browserHistory}>
       <Route path='/frontpage' component= {FrontPage}/>
      </Route>
  </Router>,  document.getElementById('main')


  )