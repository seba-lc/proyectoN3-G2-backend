const { Router } = require('express');
const usersCtrl = require('./../controllers/user.controllers');

const router = Router();

const { createUser, getUserByEmail } = usersCtrl;

router.route('/')
  .post(getUserByEmail);

router.route('/register')
  .post(createUser);

module.exports = router;