/*NOMBRE, ESTADO*/

const {model, Schema} = require('mongoose');

const CategorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    unique: true,
    minlength: 2,
    maxlength: 50
  },
  state: { //CONSULTAR POR ESTA PROPIEDAD
    type: Boolean,
    default: false,
    required: true
  },
  bgColor: {
    type: String,
    trim: true,
    uppercase: false,
    minlength: 2,
    maxlength: 50,
    default: "--fuchsia-rose"
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('Category', CategorySchema);