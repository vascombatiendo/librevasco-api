require('../config/config');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use( bodyParser.json() );

// CORS
app.use( ( req, res, next ) => {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method");
 res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
 res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
 next();
});

// Global routes
app.use( require('../routes/index' ) );

// Connect tu DB
mongoose.connect(
  process.env.URLDB,
  { useNewUrlParser: true },
  ( err, res) => {

  if ( err ) {
    throw err;
  }

  console.log( 'DB Online' );
});

app.listen( process.env.PORT, () => {
  console.log( `Listening port 3000` );
});
