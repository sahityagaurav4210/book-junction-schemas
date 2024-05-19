const DatabaseSchemas = require('./db');
const ApiSchema = require('./api');

class Schema {
  static get db() {
    return DatabaseSchemas;
  }

  static get api() {
    return ApiSchema;
  }
}

module.exports = Schema;
