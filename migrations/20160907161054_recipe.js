exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table) {
    table.increments();
    table.string('title');
    table.string('imageURL');
    table.string('source');
    table.string('source_url');
    table.integer('servings');
    table.text('description');
    table.string('readyInMinutes');
    table.json('instructions');
    table.text('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};
