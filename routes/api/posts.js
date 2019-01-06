const router = require('express').Router();
const postsController = require('../../controllers/postsController');

router.route('/api/post')
  .get(postsController.findAllPosts)
  .post(postsController.create);

router.route('/api/post/:id')
  .get(postsController.findPostById)
  .put(postsController.updatePost)
  .delete(postsController.removePost);

module.exports = router;