
exports.up = function(knex, Promise) {
  return knex.schema.createTable('activities', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('frequency')
    table.integer('level')
    table.integer('user_id').references('users.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('activities')
};
