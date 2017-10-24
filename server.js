const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const rendererHelper = require('./renderer-helper');

var app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')
app.use((req, res, next) => {
  var now = new Date().toString();

  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
  });
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  rendererHelper.innerRender(res, 'home.hbs', req.url);
});

app.get('/about', (req, res) => {
    rendererHelper.innerRender(res, 'about.hbs', req.url);
});

app.get('/projects', (req, res) => {
  rendererHelper.innerRender(res, 'projects.hbs', req.url);
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to load data'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
