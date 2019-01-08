const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ForumSchema = new Schema({
  forum_slug: String,
  forum_name: String
});

module.exports = Forum = mongoose.model('forum', ForumSchema);