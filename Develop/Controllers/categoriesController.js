// controllers/categoriesController.js
const { Category } = require('../models');

const categoriesController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getCategoryById: async (req, res) => {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (category) {
        res.json(category);
      } else {
        res.status(404).json({ error: 'Category not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createCategory: async (req, res) => {
    const { category_name } = req.body;
    try {
      const newCategory = await Category.create({ category_name });
      res.status(201).json(newCategory);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: 'Bad Request' });
    }
  },

  // ... (other controller functions)

};

module.exports = categoriesController;
