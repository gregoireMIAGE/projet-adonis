'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const DatabaseSql = use('Database');

class DatabaseSeeder {
  async run() {
    const databaseModel = await Factory
      .model('App/Models/Database')
      .create();
    const databaseArray = await Factory
      .model('App/Models/Database')
      .createMany(5);
  }
}

module.exports = DatabaseSeeder
