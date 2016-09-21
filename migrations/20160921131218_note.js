exports.up = function(knex, Promise) {
  return knex.schema.createTable('note', function(table) {
    table.increments();
    table.text('note');
    table.integer('recipe_id').references("dbID").inTable("recipe").onDelete("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('note');
};
