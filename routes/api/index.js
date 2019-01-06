const router = require('express').Router();
const postRoutes = require('./posts');

router.use('/posts', postRoutes);

module.exports = router;