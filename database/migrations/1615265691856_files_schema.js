"use strict";

const Schema = use("Schema");

class FilesSchema extends Schema {
  up() {
    this.create('files', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('name', 180).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("files");
  }
}

module.exports = FilesSchema;
