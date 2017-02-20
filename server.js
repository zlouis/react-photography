const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const app = express();
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const compiler = webpack(webpackConfig);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

//connecting to MongoDB
mongoose.connect('mongodb://localhost/react-photography');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error: ' + err);
});

db.once('open', function(){
  console.log("connected to Mongoose!")
});


const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('listening on', host, port);
});