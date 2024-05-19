const adminSchema = require('./admin_api.schema');

class Api {
  static get adminApiSchema() {
    return adminSchema;
  }
}

module.exports = Api;
