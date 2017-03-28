import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

import Main from './components/main.component.jsx';

ReactDOM.render(
    <Main />,
        document.getElementById("contents")
    )