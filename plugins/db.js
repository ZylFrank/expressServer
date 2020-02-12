module.exports = app => {
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost:27017/cjzc', {
    useNewUrlParser: true,
  }, (err) => {
    if (err) {
      return err;
    }
    console.log('数据库连接成功')
  });

}


