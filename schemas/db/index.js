const adminSchemas = require('./admin_db.schema');

class DatabaseSchemas {
  static get adminModelSchema() {
    return adminSchemas;
  }
}

module.exports = DatabaseSchemas;
