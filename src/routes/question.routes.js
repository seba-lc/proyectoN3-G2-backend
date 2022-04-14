const { Router } = require('express');
const questionCtrl = require('./../controllers/question.controllers');

const router = Router();

const { createQuestionObject } = questionCtrl;

router.route('/')
  .post(createQuestionObject);

module.exports = router;