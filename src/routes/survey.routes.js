const { Router } = require('express');
const { checkToken, checkAdminToken } = require('../middlewares/auth');
const surveysCtrl = require('./../controllers/survey.controllers');

const router = Router();

const { createSurvey, getPendingSurveys, getSurveysByCategory } = surveysCtrl;

router.route('/')
  .post(checkToken, createSurvey)
  .get(checkAdminToken, getPendingSurveys);

router.route('/:category')
  .get(getSurveysByCategory);


module.exports = router;