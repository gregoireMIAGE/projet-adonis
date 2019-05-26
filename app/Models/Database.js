'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');
const DatabaseSql = use('Database');
const Logger = use('Logger')

class Database extends Model {
  static get connection () {
    return DatabaseSql.connection('mysql').table('databases').then((data) => {
      Logger.info("Connexion ok");
      return true
    }).catch((err) => {
      Logger.info(err);
      Logger.info("Erreur connextion");
      return false;
    });
  }
}

module.exports = Database;
