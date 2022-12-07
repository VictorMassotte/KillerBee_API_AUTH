class Module {
    constructor(app) {
       this.app = app;
    }
   init() {
    const usercontroller = require('../controller/user.controller');
    new usercontroller(this.app);
   }
  }
  module.exports = Module;