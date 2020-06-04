'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GagnantsSchema extends Schema {
  up () {
    this.create('gagnants', (table) => {
      table.increments()
      table.integer('num_machine').notNullable()
      table.integer('num_gagnant').notNullable()
      table.string('heure', 25).notNullable()
      table.integer('date',).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('gagnants')
  }
}

module.exports = GagnantsSchema
