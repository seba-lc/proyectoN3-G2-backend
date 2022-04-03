const AdminUser = require('./../models/AdminUser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminUsersCtrl = {};

/* userName, userEmail, userPassword */
adminUsersCtrl.createAdminUser = async (req, res) => {
  try {
    const userInfo = req.body;
    const salt = await bcrypt.genSalt(10);
    userInfo.userPassword = await bcrypt.hash(userInfo.userPassword, salt);
    const newUser = new AdminUser(userInfo);
    await newUser.save();
    res.status(200).json({
      message: 'Usuario generado correctamente'
    })

  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al cargar el usuario, intentelo nuevamente'
    })
  }
}

/* userEmail, userPassword */
adminUsersCtrl.getAdminUserByEmail = async (req, res) => {
  try {
    const user = await AdminUser.findOne({userEmail: req.body.userEmail});
    if(user !== null){
      const result = await bcrypt.compare(req.body.userPassword, user.userPassword);
      if(result){
        const token = jwt.sign({id: user._id}, process.env.S_WORD, {expiresIn: process.env.EXPIRATION_TIME});
        res.status(200).json({id: token, userName: user.userName, userEmail: user. userEmail});
        return;
      }else{
        res.status(404).json({
          message: 'Datos Incorrectos'
        })
      }
    }else{
      res.status(404).json({
        message: 'Datos Incorrectos'
      })
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al cargar el usuario, intentelo nuevamente'
    })
  }
}

module.exports = adminUsersCtrl;