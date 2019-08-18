const express = require( 'express' );
const LibroModel = require( '../models/libro' );

const app = express();

app.get( '/libro', ( req, res ) => {

  LibroModel.find({})
            .exec( ( err, LibroModelDB ) => {

              if ( err ) {
                return res.status( 400 ).json({
                  ok: false,
                  err: err
                })
              };

              LibroModel.countDocuments({}, ( err, count ) => {

                res.json({
                  ok: true,
                  libro: LibroModelDB
                })

              });

            })

})

app.post( '/libro', ( req, res ) => {

  let body = req.body;

  let libroModel = new LibroModel({
    titulo: body.titulo,
    autor: body.autor,
    url: body.url
  });

  libroModel.save( ( err, libroDB ) => {

      if ( err ) {
        return res.status( 400 ).json({
          ok: false,
          err: err
        })
      };

      res.json({
        ok: true,
        user: libroDB
      });

  })

  })


module.exports = app;
