const { Router } = require('express');
const answerCtrl = require('./../controllers/answer.controllers');

const router = Router();

const { postUserAnswer, getAnswerByUser } = answerCtrl;

router.route('/')
  .post(postUserAnswer);

router.route('/user')
  .post(getAnswerByUser);

module.exports = router;