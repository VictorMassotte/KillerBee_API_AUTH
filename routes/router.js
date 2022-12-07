const userMssql = require('../modules/user/user.mssql');

class auth {
  async getAllUsers(req, res) {
      try {
       const output = await userMssql.getAllUsers();
       res.send(output);
     }
     catch (error) {
        console.log(error);
     }
  }

  async getUsers(req, res){
    try
    {
      const id = req.params.id;
      if (!id) {
        console.log('id is not passed');
      }
      const output = await userMssql.getUsers(id);
      res.send(output);
    }catch(error){
      console.log(error);
    }
  }

}
module.exports = new auth();