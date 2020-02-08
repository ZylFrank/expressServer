const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  passworld: { 
    type: String, 
    select: false, // 默认不返回密码；可通过findOne().select('+password')	取出
    set(val) {
    	return require(bcrypt).hashSync(val, 10);
  	},
  },
})
const User = mongoose.model('User', userSchema);

module.exports = User;