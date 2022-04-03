/*NOMBRE, ESTADO*/

const {model, Schema} = require('mongoose');

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 2,
    maxlength: 50
  },
  State: { //CONSULTAR POR ESTA PROPIEDAD
    type: String,
    uppercase: true,
    enum: ['HABILITADA', 'DESHABILITADA']
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('Category', CategorySchema);