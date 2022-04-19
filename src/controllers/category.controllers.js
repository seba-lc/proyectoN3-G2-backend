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

categoryCtrl.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().select('-createdAt -updatedAt');
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al obtener las categorías'
    })
  }
}

categoryCtrl.updateCategory = async (req, res) => {
  try {
    await Category.findByIdAndUpdate(req.params.id, {state: true}, {runValidators: true});
    res.status(200).json({message: 'Producto actualizado correctamente'});
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: 'Error al actualizar la categoría'
    })
  }
}

module.exports = categoryCtrl;