const { Router } = require('express');
const categoryCtrl = require('./../controllers/category.controllers');

const router = Router();

const {} = categoryCtrl;

router.route('/')
  .post();

module.exports = router;