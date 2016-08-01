import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from '../src/components/Routes';

const app = express();

// view engine setup
app.set('views', path.resolve(__dirname, '../build'));
app.set('view engine', 'ejs');

app.use('/assets', express.static(path.resolve(__dirname, '../build/')));

app.use(function (req, res) {

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (renderProps) {
      // You can also check renderProps.components or renderProps.routes for
      // your "not found" component or route respectively, and send a 404 as
      // below, if you're using a catch-all route.
      res.status(200);
      res.render('index.ejs', {
        reactHtml: renderToString(<RouterContext {...renderProps} />)
      });
    } else {
      res.status(404).send('Not found')
    }
  })
});

app.listen(9090, function () {
  console.log('Example app listening on port 9090!');
});
