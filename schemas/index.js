const DatabaseSchemas = require('./db');

class Schema {
  static get db() {
    return DatabaseSchemas;
  }
}

module.exports = Schema;
