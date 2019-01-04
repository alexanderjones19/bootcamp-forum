const router = require('express').Router();
const postsController = require('../../controllers/postsController');

router.route('/')
  .get(postsController.findAll)
  .post(postsController.create);

