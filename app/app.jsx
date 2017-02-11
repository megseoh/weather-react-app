import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import About from 'About';
import Examples from 'Examples';
import Weather from 'Weather';

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