function findRecipeId(recipes, title){
  for (var i=0; i< recipes.length; i++){
    var recipe = recipes[i];
    if (title === recipe.title) {
      return recipe.id
    };
  };
};

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE ingredient RESTART IDENTITY CASCADE')
    .then(function(){
      return Promise.all([
        knex('recipe').select()
      ])
      .then(function (data) {
        var recipes = data[0]
        return Promise.all([
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '2 tbsp Butter',
            food: 'Butter',
            quantity: '2 tbsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: 'Salt and fresh ground pepper to taste',
            food: 'salt and pepper'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '2 tsp Paprika',
            food: 'Paprika',
            quantity: '2 tsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '1 Red Bell Pepper chopped',
            food: 'Red Bell Pepper',
            quantity: '1'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '1 Green Bell Pepper chopped',
            food: 'Green Bell Pepper',
            quantity: '1'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '1 tbsp Minced Shallots',
            food: 'Shallots',
            quantity: '1 tbsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '1 tsp Chopped Garlic',
            food: 'Garlic',
            quantity: '1 tsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '1/2 cup Sour Cream',
            food: 'Sour Cream',
            quantity: '1/2 cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '1 cup Plain Mountain High Yoghurt',
            food: 'Plain Yoghurt',
            quantity: '1 cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Fresh Fettuccine Alfredo Sauce'),
            ingredient_line: '4 tbsp Fresh Basil Leaves',
            food: 'Fresh Basil Leaves',
            quantity: '4 tbsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Crockpot Buffalo Chicken Dip'),
            ingredient_line: '4 skinless, boneless chicken breasts',
            food: 'Chicken breasts',
            quantity: '4'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Crockpot Buffalo Chicken Dip'),
            ingredient_line: '12 oz. Frank\’s Buffalo Sauce',
            food: 'Frank\’s Buffalo Sauce',
            quantity: '12 oz.'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Crockpot Buffalo Chicken Dip'),
            ingredient_line: '2 blocks low-fat cream cheese',
            food: 'Cream Cheese',
            quantity: '2 blocks'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Crockpot Buffalo Chicken Dip'),
            ingredient_line: 'Ranch Dressing',
            food: 'Ranch Dressing',
            quantity: 'To taste'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Garlic Mashed Cauliflower'),
            ingredient_line: '1 head cauliflower, cut into florets',
            food: 'Cauliflower',
            quantity: '1 head'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Garlic Mashed Cauliflower'),
            ingredient_line: '3 cloves garlic',
            food: 'Garlic',
            quantity: '3 cloves'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Garlic Mashed Cauliflower'),
            ingredient_line: '1 cup chicken broth',
            food: 'Chicken broth',
            quantity: '1 cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Garlic Mashed Cauliflower'),
            ingredient_line: '½ cup of cream or whole milk',
            food: 'Cream or whole milk',
            quantity: '½ cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Garlic Mashed Cauliflower'),
            ingredient_line: '2 tablespoons butter',
            food: 'Butter',
            quantity: '2 tbsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Garlic Mashed Cauliflower'),
            ingredient_line: 'Salt and Pepper',
            food: 'Salt and pepper'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Chess Pie'),
            ingredient_line: '3 eggs',
            food: 'Eggs',
            quantity: '3'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Chess Pie'),
            ingredient_line: '1 ½ cups sugar',
            food: 'Sugar',
            quantity: '1.5 cups'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Chess Pie'),
            ingredient_line: '1 tsp. vanilla',
            food: 'Vanilla extract',
            quantity: '1 tsp.'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Chess Pie'),
            ingredient_line: '1 stick butter',
            food: 'Butter',
            quantity: '1 stick'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Baked Cheese Crackers'),
            ingredient_line: '½ a pound of grated extra sharp cheddar or grated sharp',
            food: 'Extra Sharp Cheddar',
            quantity: '½ a pound'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Baked Cheese Crackers'),
            ingredient_line: '1 stick butter softened',
            food: 'Butter',
            quantity: '1 stick'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Baked Cheese Crackers'),
            ingredient_line: '1 tsp salt',
            food: 'Salt',
            quantity: '1 tsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Baked Cheese Crackers'),
            ingredient_line: '½ tsp cayenne',
            food: 'Cayenne',
            quantity: '½ tsp'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Baked Cheese Crackers'),
            ingredient_line: '1 (or 1 ¼) cups all purpose flour',
            food: 'All purpose flour',
            quantity: '1 cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Baked Cheese Crackers'),
            ingredient_line: '½ cup toasted sesame seed',
            food: 'Sesame seeds',
            quantity: '½ cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Greek Yogurt Chicken Parm'),
            ingredient_line: '½ cup plain Greek yogurt',
            food: 'Plain Greek yogurt',
            quantity: '½ cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Greek Yogurt Chicken Parm'),
            ingredient_line: '¼ cup shredded Parmesan cheese',
            food: 'Parmesan cheese',
            quantity: '¼ cup'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Greek Yogurt Chicken Parm'),
            ingredient_line: '4 boneless skinless chicken breast cutlets, about 1 ¼ lbs. total weight or about 5 oz. per breast',
            food: 'Chicken breast',
            quantity: '4'
          }),
          knex('ingredient').insert({
            recipe_id: findRecipeId(recipes, 'Greek Yogurt Chicken Parm'),
            ingredient_line: '4 tsp. Italian seasoned dry bread crumbs',
            food: 'Italian seasoned dry bread crumbs',
            quantity: '4 tsp.'
          })
        ]);
      });
    })
};
