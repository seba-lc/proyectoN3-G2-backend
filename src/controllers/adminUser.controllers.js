const AdminUser = require("./../models/AdminUser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminUsersCtrl = {};

adminUsersCtrl.createAdminUser = async (req, res) => {
  try {
    const userInfo = req.body;
    const salt = await bcrypt.genSalt(10);
    userInfo.password = await bcrypt.hash(userInfo.password, salt);
    const newUser = new AdminUser(userInfo);
    await newUser.save();
    res.status(200).json({
      message: "Usuario generado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al cargar el usuario, intentelo nuevamente",
    });
  }
};

adminUsersCtrl.getAdminUserByEmail = async (req, res) => {
  try {
    const user = await AdminUser.findOne({ email: req.body.email });
    if (user !== null) {
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        const token = jwt.sign({ id: user._id }, process.env.S_WORD, {
          expiresIn: process.env.EXPIRATION_TIME,
        });
        res.status(200).json({ id: token, name: user.name, email: user.email });
        return;
      } else {
        res.status(404).json({
          message: "Datos Incorrectos",
        });
      }
    } else {
      res.status(404).json({
        message: "Datos Incorrectos",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al cargar el usuario, intentelo nuevamente",
    });
  }
};

adminUsersCtrl.getAdminUserByToken = async (req, res) => {
  try {
    let user = await AdminUser.findById(req.id).select("-_id name email");
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al cargar el usuario, intentelo nuevamente",
    });
  }
};

module.exports = adminUsersCtrl;
