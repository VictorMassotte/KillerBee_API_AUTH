const mssqlcon = require('../../database/database');

class UserMSSql {
  async getAllUsers() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().query('SELECT * FROM users');
    return res.recordset;
  }

  async getUsers(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().input('id', id).query('SELECT * FROM users WHERE id = @id');
    return res.recordset;
  }

}

module.exports = new UserMSSql();