const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    // be sure to include its associated Product data
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // find a single tag by its `id`
    // be sure to include its associated Product data
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
});

router.post('/', async (req, res) => {
  const { tag_name } = req.body;
  try {
    // create a new tag
    const newTag = await Tag.create({ tag_name });
    res.status(201).json(newTag);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { tag_name } = req.body;
  try {
    // update a tag's name by its `id` value
    const [affectedRows] = await Tag.update(
      { tag_name },
      {
        where: {
          id,
        },
      }
    );

    if (affectedRows > 0) {
      res.json({ message: 'Tag updated successfully' });
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Bad Request' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // delete one tag by its `id` value
    const affectedRows = await Tag.destroy({
      where: {
        id,
      },
    });

    if (affectedRows > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ error: 'Tag not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
