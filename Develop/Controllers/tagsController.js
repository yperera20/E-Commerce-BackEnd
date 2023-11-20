const { Tag, Product, ProductTag } = require('../models');

const tagsController = {
  getAllTags: async (req, res) => {
    try {
      const tags = await Tag.findAll({
        include: [{ model: Product, through: ProductTag }],
      });
      res.json(tags);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getTagById: async (req, res) => {
    const { id } = req.params;
    try {
      const tag = await Tag.findByPk(id, {
        include: [{ model: Product, through: ProductTag }],
      });

      if (tag) {
        res.json(tag);
      } else {
        res.status(404).json({ error: 'Tag not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createTag: async (req, res) => {
    const { tag_name } = req.body;
    try {
      const newTag = await Tag.create({ tag_name });
      res.status(201).json(newTag);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Add other CRUD operations as needed

};

module.exports = tagsController;
