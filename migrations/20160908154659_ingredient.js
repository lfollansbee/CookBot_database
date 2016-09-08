exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', function(table) {
    table.increments();
    table.integer('recipe_id').references("id").inTable("recipe").onDelete("CASCADE");
    table.string('ingredient_line');
    table.string('food');
    table.string('quantity');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient');
};
