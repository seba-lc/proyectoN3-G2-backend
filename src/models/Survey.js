/*NOMBRE, ESTADO, PREGUNTAS, RESPUESTAS, CATEGORIA*/

const {model, Schema} = require('mongoose');

const SurveySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    minlength: 2,
    maxlength: 50
  },
  state: {
    type: Boolean,
    required: true,
    default: false
  },
  questions: {
    type: [Schema.Types.ObjectId],
    ref: 'Question',
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minlength: 2,
    maxlength: 100
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('Survey', SurveySchema);