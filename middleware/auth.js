module.exports = options => {
  const assert = require('http-assert');
  const jwt = require('jsonwebtoken');
  const User = require('../models/User');

  return async (req, res, next) => {
    const raw = req.headers.authorization;
    assert(raw, 401, 'please login');

    const { id } = jwt.verify(raw, SECRET);
    assert(id, 401, 'please login');

    req.user = await User.findById(id);
    assert(req.user, 401, 'please login');

    await next();
  }
}