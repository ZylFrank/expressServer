const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: { type: String },
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Categoty' }, // 添加自分类
})

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category;