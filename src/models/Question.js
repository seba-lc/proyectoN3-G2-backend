const {model, Schema} = require('mongoose');

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  answers: {
    type: Array,
    required: true,
    default: []
  }
}, {
  versionKey: false,
  timestamps: false
});

module.exports = model('Question', QuestionSchema)