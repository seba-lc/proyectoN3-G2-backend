const { Router } = require('express');
const { checkAdminToken } = require('../middlewares/auth');
const categoryCtrl = require('./../controllers/category.controllers');

const router = Router();

const {createCategory, getCategoriesChecked} = categoryCtrl;

router.route('/')
  .post(/*checkAdminToken, */createCategory)
  .get(getCategoriesChecked);

module.exports = router;