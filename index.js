import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
// import routes and pass them into <Router/>
import routes from './config/routes'

import Bootstrap from './stylesheets/bootstrap.min.css';

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)