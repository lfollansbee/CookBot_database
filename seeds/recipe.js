exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE recipe RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        knex('recipe').insert({
          dairyFree: false,
          extendedIngredients: JSON.stringify(['2 tbsp Butter', 'Salt and fresh ground pepper to taste', '2 tsp Paprika', '1 Red Bell Pepper chopped', '1 Green Bell Pepper chopped', '1 tbsp Minced Shallots', '1 tsp Chopped Garlic', '1/2 cup Sour Cream', '1 cup Plain Mountain High Yoghurt', '4 tbsp Fresh Basil Leaves']),
          extendedInstructions: JSON.stringify(['Heat butter in a large skillet.', 'Stir in salt and pepper to taste and paprika.', 'Add red and green bell peppers, shallots, garlic.', 'Cook, stirring, about 3 to 4 minutes over medium high heat.', 'Add sour cream and yogurt and blend all together.', 'Add fresh basil bring to a simmer for about 30 seconds. (Do not boil or sauce will separate.)', 'Serve over cooked fettuccine and garnish with a cracked black pepper.']),
          glutenFree: true,
          image: 'https://i.mctimg.com/file/f34a83d62fe81353507a26147417f6c5491d18a4.png/r430x430/f100c2401314bc00e49da75d1549f39fff11c0fe8bfc6bfb737f3a4834464062',
          sourceName: 'Sprouts Farmers Market',
          source_url: 'https://www.sprouts.com/recipe/details/-/view/11591',
          readyInMinutes: 15,
          servings: 4,
          title: 'Fresh Fettuccine Alfredo Sauce',
          vegan: false,
          vegetarian: true
        }),
        knex('recipe').insert({
          dairyFree: false,
          extendedIngredients: JSON.stringify(['4 skinless, boneless chicken breasts', '12 oz. Frank\’s Buffalo Sauce', '2 blocks low-fat cream cheese', 'Ranch Dressing']),
          extendedInstructions: JSON.stringify(['Place chicken breasts in crockpot with buffalo sauce.', 'Cook for 6-8 hours on low (chicken can be frozen, just let it cook for closer to 8 hours).', 'Once chicken is cooked, shred with forks.', 'Add in cream cheese, making sure the blocks are spread through the whole dip.  Add ranch to taste.', 'Cook for 1-2 hours.', 'Serve hot.']),
          glutenFree: true,
          instructions: 'Place chicken breasts in crockpot with buffalo sauce. Cook for 6-8 hours on low (chicken can be frozen, just let it cook for closer to 8 hours). Once chicken is cooked, shred with forks. Add in cream cheese, making sure the blocks are spread through the whole dip.  Add ranch to taste. Cook for 1-2 hours. Serve hot.',
          title: 'Crockpot Buffalo Chicken Dip',
          vegan: false,
          vegetarian: false,
          veryHealthy: false,
          veryPopular: true,
          description: 'Delicious crowd-pleaser and easy to make for parties.',
          notes: 'If dip is too liquidy, remove crockpot lid for a little bit, but continue stirring occasionally.'
        }),
        knex('recipe').insert({
          dairyFree: false,
          extendedIngredients: JSON.stringify(['1 ½ cups sugar', '1 tsp. vanilla', '1 stick butter']),
          extendedInstructions: JSON.stringify(['Preheat at 350°F.', 'Melt sugar and butter and cool.', 'Beat eggs until frothy.', 'Add sugar/butter mixture, beating constantly.', 'Bake 1 hour.']),
          glutenFree: false,
          instructions: 'Preheat at 350°F. Melt sugar and butter and cool. Beat eggs until frothy. Add sugar/butter mixture, beating constantly. Bake 1 hour.',
          sourceName: 'Frances Edwards(Nana\'s friend)',
          readyInMinutes: 60,
          title: 'Chess Pie',
          vegan: false,
          vegetarian: true,
          veryHealthy: false,
          veryPopular: true,
          description: 'You can\’t get more basic than chess pie. Remarkable in its simplicity, timeless in appeal, chess pie is the ultimate Southern pantry pie.',
          notes: 'Can make miniature pies (not bite size, but personal sized) with mini pie shells (phyllo).  This recipe makes 36+ mini pies.'
        }),
        knex('recipe').insert({
          dairyFree: false,
          extendedIngredients: JSON.stringify(['½ a pound of grated extra sharp cheddar or grated sharp', '1 stick butter softened', '1 tsp salt', '½ tsp cayenne', '1 (or 1 ¼) cups all purpose flour', '½ cup toasted sesame seed']),
          extendedInstructions: JSON.stringify(['Cream butter and cheese (add lemon juice at this point)', 'Mix (sift) dry ingredients (flour, salt, cayenne) together well and slowly add to the creamed cheese and butter.','Slowly add toasted sesame seeds and knead.','Roll into logs about 1 inch, wrap in waxed paper and chill several hours or freeze','Slice rolls into thin dimes','Bake at 350 for 10-15 minutes', 'Keep in tightly covered tins or plastic ware']),
          glutenFree: false,
          instructions: 'Cream butter and cheese (add lemon juice at this point). Mix (sift) dry ingredients (flour, salt, cayenne) together well and slowly add to the creamed cheese and butter. Slowly add toasted sesame seeds and knead. Roll into logs about 1 inch, wrap in waxed paper and chill several hours or freeze. Slice rolls into thin dimes. Bake at 350 for 10-15 minutes. Keep in tightly covered tins or plastic ware',
          sourceName: 'Harriet (Dunn) Sewell',
          title: 'Baked Cheese Crackers',
          vegan: false,
          vegetarian: true,
          veryPopular: true,
          description: 'Delicious cheese biscuit crackers.',
          notes: 'You can buy the sharp cheese already finely shredded...don’t use the thick shredded.  When rolling the dough, 1 ¼\” square is perfect size for three rows across in plasticwares'
        })
      ]);
    });
};


// knex('recipe').insert({
//   cookingMinutes: ,
//   dairyFree: ,
//   extendedIngredients: JSON.stringify(['']),
//   extendedInstructions: JSON.stringify(['']),
//   glutenFree: ,
//   spoonacularID: ,
//   image: '',
//   instructions: ,
//   preparationMinutes: ,
//   sourceName: '',
//   source_url: '',
//   spoonacularSourceUrl: '',
//   readyInMinutes: ,
//   servings: ,
//   title: '',
//   vegan: ,
//   vegetarian: ,
//   veryHealthy: ,
//   veryPopular: ,
//   description: '',
//   notes: ''
// })
