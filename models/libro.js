const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let libroModel = new Schema({
    titulo: {
      type: String,
      required: [true, 'El titulo es obligatorio']
    },
    autor: {
      type: String,
      required: [true, 'El autor es obligatorio']
    },
    url: {
      type: String,
      required: false
    }
});

module.exports = mongoose.model( 'LibroModel', libroModel );
