const user = require('../routes/router');
const express = require('express');
const router = express.Router();

class UserController {
    constructor(app) {
      router.get('/', user.getAllUsers);
      router.get('/:id', user.getUsers);
      
      app.use('/api/v1/auth', router);
    }
 }
module.exports = UserController;