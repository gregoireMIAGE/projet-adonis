'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DatabaseSchema extends Schema {
  up () {
    this.create('databases', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('databases')
  }
}

module.exports = DatabaseSchema
