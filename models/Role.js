const mongoose = require('mongoose');

const roleSchema = {
  name: { type: String },
  alias: { type: String }
};

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;