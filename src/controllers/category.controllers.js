const res = require('express/lib/response');
const Category = require('./../models/Category');

const categoryCtrl = {};

//categoryName, state, bgColor
categoryCtrl.createCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json({
      message: 'Categoría almacenada correctamente'
    })
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al crear la categoría'
    })
  }
}

categoryCtrl.getCategoriesChecked = async (req, res) => {
  try {
    const categories = await Category.find({state: true}, '-createdAt -updatedAt');
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al obtener las categorías'
    })
  }
}

module.exports = categoryCtrl;