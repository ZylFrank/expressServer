module.exports = options => {
  return async (req, res) => {
    const modelName = require('inflection').classify(req.params.resource);  // 字符串转换为类型
    req.Model = require(`../models/${modelName}`);
    await next();
  }
}