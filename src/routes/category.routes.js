const { Router } = require('express');
const { checkAdminToken } = require('../middlewares/auth');
const categoryCtrl = require('./../controllers/category.controllers');

const router = Router();

const {createCategory, getCategories, updateCategory} = categoryCtrl;

router.route('/')
  .post(checkAdminToken, createCategory)
  .get(getCategories);

router.route('/:id')
  .put(checkAdminToken, updateCategory);

module.exports = router;