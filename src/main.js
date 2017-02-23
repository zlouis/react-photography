import React from 'react';
import ReactDOM from 'react-dom';
// import Counter from './Counter';
import Header from './components/Header';
import FrontPage from './pages/FrontPage';


 
// document.addEventListener('DOMContentLoaded', function() {
//   ReactDOM.render(
//     React.createElement(Counter),
//     document.getElementById('mount')
//   );
// });

ReactDOM.render(
<div>
  <Header />

  <FrontPage />


</div> , document.getElementById("main")
  );