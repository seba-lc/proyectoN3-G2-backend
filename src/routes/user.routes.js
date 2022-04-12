const { Router } = require('express');
const { checkToken } = require('../middlewares/auth');
const usersCtrl = require('./../controllers/user.controllers');

const router = Router();

const { createUser, getUserByEmail, getUserByToken } = usersCtrl;

router.route('/')
  .post(getUserByEmail)
  .get(checkToken, getUserByToken);

router.route('/register')
  .post(createUser);

module.exports = router;