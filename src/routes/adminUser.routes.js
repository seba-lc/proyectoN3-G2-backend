const { Router } = require('express');
const adminUsersCtrl = require('./../controllers/adminUser.controllers');

const router = Router();

const { createAdminUser, getAdminUserByEmail } = adminUsersCtrl;

/* USUARIO ADMIN:
{
  userEmail: admin@gmail.com,
  userPassword: comision21ig2
}
*/

router.route('/')
  .post(getAdminUserByEmail);

router.route('/adminRegister')
  .post(createAdminUser);

module.exports = router;