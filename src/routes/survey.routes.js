const { Router } = require('express');
const { checkToken, checkAdminToken } = require('../middlewares/auth');
const surveysCtrl = require('./../controllers/survey.controllers');

const router = Router();

const { createSurvey, getPendingSurveys, getSurveysByCategory, getPublishedSurveys, getSurveyById, updateSurveyById } = surveysCtrl;

router.route('/')
  .post(/*checkToken, */createSurvey)
  .get(checkAdminToken, getPendingSurveys);

router.route('/:id')
  .put(checkAdminToken, updateSurveyById);

router.route('/published')
  .get(getPublishedSurveys);

router.route('/:category')
  .get(getSurveysByCategory);

router.route('/encuesta/:id')
  .get(getSurveyById)


module.exports = router;