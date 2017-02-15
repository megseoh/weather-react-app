import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import About from 'About';
import Examples from 'Examples';
import Weather from 'Weather';

// load foundation using style-loader & css-loader
// tried to use import & it fucked everything up & created chunk 0 outside of /public/ which wouldn't load
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles');

ReactDOM.render(
  <Router history={ hashHistory }>
  	<Route path="/" component={ Main } >
  		<Route path="about" component={ About } />
  		<Route path="examples" component={ Examples } />
  		<IndexRoute component={ Weather } />
  	</Route>
  </Router>,
  document.getElementById('app')
);