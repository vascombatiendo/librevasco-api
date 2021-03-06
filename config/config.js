//==============================================================================
//                              PORT
//==============================================================================

process.env.PORT = process.env.PORT || 3000;

//==============================================================================
//                              ENVIRONMENT
//==============================================================================

process.env.NODE_ENV = process.env.NODE_ENV || 'local';


//==============================================================================
//                              DB
//==============================================================================

let urlDB;

urlDB = 'mongodb://mongo:27017/bibliovasca';

process.env.URLDB = urlDB;
