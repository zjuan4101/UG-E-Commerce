const express = require('express');
const router = express.Router();
const itemsCtrl = require('../../controllers/api/items');

// GET /api/items
router.get('/', itemsCtrl.index);
// GET /api/items/:id
router.get('/:id', itemsCtrl.show);
// POST /api/items/:itemId/categories/:categoryId
router.post('/:itemId/categories/:categoryId', itemsCtrl.addToCategory);
// DELETE /api/items/:itemId/categories/:categoryId
router.delete('/:itemId/categories/:categoryId', itemsCtrl.removeFromCategory);

module.exports = router;
