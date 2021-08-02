const router = require('express').Router();
const categoryRoutes = require('./ca_routes');
const productRoutes = require('./pr_routes');
const tagRoutes = require('./tag_routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;