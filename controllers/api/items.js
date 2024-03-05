const Item = require('../../models/item');
const Category = require('../../models/category');

module.exports = {
    index,
    show,
    addToCategory,
    removeFromCategory
};

async function index(req, res) {
  try {
      // Populate the 'category' field to include category details
      const items = await Item.find({}).populate('category').exec();
      
      // Extract categories from items
      const categories = items.reduce((acc, item) => {
          item.category.forEach(cat => {
              if (!acc.some(c => c._id.equals(cat._id))) {
                  acc.push(cat);
              }
          });
          return acc;
      }, []);

      res.status(200).json({ items, categories });
  } catch (e) {
      res.status(400).json({ msg: e.message });
  }
}


async function show(req, res) {
    try {
        const item = await Item.findById(req.params.id);
        res.status(200).json(item);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function addToCategory(req, res) {
    try {
        const itemId = req.params.itemId;
        const categoryId = req.params.categoryId;

        const item = await Item.findById(itemId);
        const category = await Category.findById(categoryId);

        if (!item || !category) {
            return res.status(404).json({ msg: 'Item or category not found' });
        }

        if (!item.category.includes(categoryId)) {
            item.category.push(categoryId);
            await item.save();
            res.status(200).json({ msg: 'Item added to category successfully' });
        } else {
            res.status(400).json({ msg: 'Item is already in the category' });
        }
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

async function removeFromCategory(req, res) {
    try {
        const itemId = req.params.itemId;
        const categoryId = req.params.categoryId;

        const item = await Item.findById(itemId);

        if (!item) {
            return res.status(404).json({ msg: 'Item not found' });
        }

        const index = item.category.indexOf(categoryId);

        if (index === -1) {
            return res.status(400).json({ msg: 'Item is not in the category' });
        }

        item.category.splice(index, 1);
        await item.save();

        res.status(200).json({ msg: 'Item removed from category successfully' });
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}
