const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Categoty' }, // 添加自分类
})

categorySchema.virtual('posts', {
  localField: '_id',
  ref: 'Post',
  foreignField: 'category',
  justOne: false,
})

const Category = mongoose.model('Category', categorySchema)

module.exports = Category;