function findRecipeId(recipes, title){
  for (var i=0; i< recipes.length; i++){
    var recipe = recipes[i];
    if (title === recipe.title) {
      return recipe.dbID
    };
  };
};

exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE note RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        knex('recipe').select()
      ])
      .then(function(data){
        var recipes = data[0]
        return Promise.all([
          knex('note').insert({
            note: 'If dip is too liquidy, remove crockpot lid for a little bit, but continue stirring occasionally.',
            recipe_id: findRecipeId(recipes, 'Crockpot Buffalo Chicken Dip')
          }),
          knex('note').insert({
            note: 'You can buy the sharp cheese already finely shredded...don’t use the thick shredded.  When rolling the dough, 1 ¼\” square is perfect size for three rows across in plasticwares',
            recipe_id: findRecipeId(recipes, 'Baked Cheese Crackers')
          }),
          knex('note').insert({
            note: 'Can make miniature pies (not bite size, but personal sized) with mini pie shells (phyllo).  This recipe makes 36+ mini pies.',
            recipe_id: findRecipeId(recipes, 'Chess Pie')
          })
      ]);
    });
    })
}
