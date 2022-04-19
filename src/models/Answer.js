const {model, Schema} = require('mongoose');

const AnswerSchema = new Schema({
  user: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    maxlength: 100
  },
  answers: {
    type: Array,
    required: true
  },
  surveyName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 100
  }
}, {
  versionKey: false,
  timestamps: true
});

module.exports = model('Answer', AnswerSchema);