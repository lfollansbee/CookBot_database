exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table) {
    table.increments('dbID');
    table.integer('cookingMinutes');
    table.boolean('dairyFree');
    table.json('extendedIngredients');
    table.json('extendedInstructions');
    table.boolean('glutenFree');
    table.integer('spoonacularID');
    table.string('image');
    table.text('instructions');
    table.integer('preparationMinutes');
    table.string('sourceName');
    table.string('source_url');
    table.string('spoonacularSourceUrl');
    table.integer('readyInMinutes');
    table.integer('servings');
    table.string('title');
    table.boolean('vegan');
    table.boolean('vegetarian');
    table.boolean('veryHealthy');
    table.boolean('veryPopular');
    table.text('description');
    table.text('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe');
};
