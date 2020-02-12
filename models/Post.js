const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String },
  body: { type: String },
  categories: [{ type: mongoose.SchemaTypes.objectId, ref: 'Category' }],	// 关联多个Category
})

const Post = mongoose.model('Post', postSchema)
module.exports = Post