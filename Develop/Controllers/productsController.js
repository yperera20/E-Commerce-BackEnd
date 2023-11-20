const { Product, Category, Tag, ProductTag } = require('../models');

const productsController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [{ model: Category }, { model: Tag, through: ProductTag }],
      });
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getProductById: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id, {
        include: [{ model: Category }, { model: Tag, through: ProductTag }],
      });

      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  createProduct: async (req, res) => {
    const { product_name, price, stock, category_id, tagIds } = req.body;

    try {
      const newProduct = await Product.create({
        product_name,
        price,
        stock,
        category_id,
      });

      if (tagIds && tagIds.length) {
        const productTagIdArr = tagIds.map((tag_id) => ({
          product_id: newProduct.id,
          tag_id,
        }));

        await ProductTag.bulkCreate(productTagIdArr);
      }

      res.status(201).json(newProduct);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  // Add other CRUD operations as needed

};

module.exports = productsController;
