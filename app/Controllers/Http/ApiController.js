'use strict'
const Moment = require("moment");
const Database = use('App/Models/Database');

class ApiController {
  index ({request, response}){
    return Database.connection.then((status) => {
      return response.send({
        backend:{
          check:true,
          time: Moment().format()
        },
        mysql: {
          check: status,
          time: Moment().format()
        }
      });
    });
  }
}

module.exports = ApiController;
