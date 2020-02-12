module.exports = app => {
  const express = require('express');
  // 判断处理
  const assert = require('http-assert');

  // 登录校验中间件
  const authMiddleWare = require('../../middleware/auth');
  const resourceMiddleWare = require('../../middleware/resource');


  const router = express.Router({
    mergeParams: true, // 将父级params与子级合并
  });

  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const list = await req.Model.find().setOptions(queryOptions).limit(10);
    res.send(list);
  })



  router.post('/', async (req, res) => {
    const item = await req.Model.create(req.body);
    res.send(item);
  })

  router.put('/:id', async (req, res) => {
    const item = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    // 判断处理
    assert(item, 422, '数据不存在')
    res.send(item);
  })

  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndRemove(req.params.id);
    res.send({
      status: true,
      message: `deleted ${req.params.id} category success!`,
    });
  })

  app.use('/admin/api/rest/:resource', resourceMiddleWare(), router);

  // 文件上传
  const multer = require('multer');
  const upload = multer({ dest: __dirname + '../../uploads'})
  app.post('/admin/api/upload', authMiddleWare(), upload.single('file'), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3001/uploads/${file.filename}`;
    res.send(file);
  })

  // 异常捕获
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode).send({
      message: err.message,
    })
  })
}