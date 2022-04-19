const { Router } = require('express');
const { checkAdminToken } = require('../middlewares/auth');
const adminUsersCtrl = require('./../controllers/adminUser.controllers');

const router = Router();

const { createAdminUser, getAdminUserByEmail, getAdminUserByToken } = adminUsersCtrl;

/* USUARIO ADMIN:
{
  userEmail: admin@gmail.com,
  userPassword: comision21ig2
}
*/

router.route('/')
  .post(getAdminUserByEmail)
  .get(checkAdminToken, getAdminUserByToken);

router.route('/adminRegister')
  .post(createAdminUser);

module.exports = router;