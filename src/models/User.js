/* NOMBRE, EMAIL PASSWORD */

const {model, Schema} = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: 5,
    maxlength: 100
  },
  password: {
    type: String,
    required:true,
    trim: true,
    minlength: 8,
    maxlength: 80
  },
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('User', UserSchema);