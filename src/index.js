import React from 'react';
import { render } from 'react-dom';
import { Router, IndexRoute, browserHistory as history, match } from 'react-router';
import routes from './components/Routes';

match({ history, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Router {...renderProps} />,
    document.getElementById('app')
  )
});
