const express = require( 'express' );

const app = express();

app.use( require('./libros'));

module.exports = app;
