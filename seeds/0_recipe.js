exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE recipe RESTART IDENTITY CASCADE')
    .then(function () {
      return Promise.all([
        knex('recipe').insert({
          title: 'Fresh Fettuccine Alfredo Sauce',
          imageURL: 'https://i.mctimg.com/file/f34a83d62fe81353507a26147417f6c5491d18a4.png/r430x430/f100c2401314bc00e49da75d1549f39fff11c0fe8bfc6bfb737f3a4834464062',
          source: 'Sprouts Farmers Market',
          source_url: 'https://www.sprouts.com/recipe/details/-/view/11591',
          servings: 4,
          readyInMinutes: '14 minutes',
          instructions: JSON.stringify(['Heat butter in a large skillet.', 'Stir in salt and pepper to taste and paprika.', 'Add red and green bell peppers, shallots, garlic.', 'Cook, stirring, about 3 to 4 minutes over medium high heat.', 'Add sour cream and yogurt and blend all together.', 'Add fresh basil bring to a simmer for about 30 seconds. (Do not boil or sauce will separate.)', 'Serve over cooked fettuccine and garnish with a cracked black pepper.'])
        }),
        knex('recipe').insert({
          title: 'Crockpot Buffalo Chicken Dip',
          description: 'Delicious crowd-pleaser and easy to make for parties.',
          readyInMinutes: '6-8 hours',
          instructions: JSON.stringify(['Place chicken breasts in crockpot with buffalo sauce.', 'Cook for 6-8 hours on low (chicken can be frozen, just let it cook for closer to 8 hours).', 'Once chicken is cooked, shred with forks.', 'Add in cream cheese, making sure the blocks are spread through the whole dip.  Add ranch to taste.', 'Cook for 1-2 hours.', 'Serve hot.']),
          notes: 'If dip is too liquidy, remove crockpot lid for a little bit, but continue stirring occasionally.'
        }),
        knex('recipe').insert({
          title: 'Garlic Mashed Cauliflower',
          source: 'Edible Nashville',
          description: 'A healthier substitute for mashed potatoes!',
          instructions: JSON.stringify(['Combine cauliflower florets, garlic and broth in a saucepan.', 'Bring to a boil, reduce heat, and simmer 10 minutes until cauliflower is tender.', 'Remove from heat, mash until creamy.', 'Add milk and butter, stir well and season with salt and pepper.'])
        }),
        knex('recipe').insert({
          title: 'Chess Pie',
          source: 'Frances Edwards(Nana\'s friend)',
          description: 'You can\’t get more basic than chess pie. Remarkable in its simplicity, timeless in appeal, chess pie is the ultimate Southern pantry pie.',
          readyInMinutes: 'About 1 hour',
          instructions: JSON.stringify(['Preheat at 350°F.', 'Melt sugar and butter and cool.', 'Beat eggs until frothy.', 'Add sugar/butter mixture, beating constantly.', 'Bake 1 hour.']),
          notes: 'Can make miniature pies (not bite size, but personal sized) with mini pie shells (phyllo).  This recipe makes 36+ mini pies.'
        }),
        knex('recipe').insert({
          title: 'Baked Cheese Crackers',
          source: 'Harriet (Dunn) Sewell',
          description: 'Delicious cheese biscuit crackers.',
          instructions: JSON.stringify([
            'Cream butter and cheese (add lemon juice at this point)', 'Mix (sift) dry ingredients (flour, salt, cayenne) together well and slowly add to the creamed cheese and butter.','Slowly add toasted sesame seeds and knead.','Roll into logs about 1 inch, wrap in waxed paper and chill several hours or freeze','Slice rolls into thin dimes','Bake at 350 for 10-15 minutes', 'Keep in tightly covered tins or plastic ware']),
          notes: 'You can buy the sharp cheese already finely shredded...don’t use the thick shredded.  When rolling the dough, 1 ¼\” square is perfect size for three rows across in plasticwares'
        }),
        knex('recipe').insert({
          title: 'Greek Yogurt Chicken Parm',
          servings: 4,
          readyInMinutes: '20 minutes',
          instructions: JSON.stringify([
            'Preheat oven to 425 F', 'Mix Greek yogurt and cheese in small bowl.', 'Lay chicken breasts on baking sheet and spread yogurt and cheese mixture evenly atop each breast.', 'Evenly sprinkle bread crumbs atop each chicken breast.','Place in oven for 20 minutes or until chicken is cooked thoroughly and juice runs clear.  Tops will be browned and chicken will be incredibly juicy.','Season with fresh cracked pepper and sea salt, if desired.'
          ]),
          notes: 'Line the baking sheet with parchment paper to make clean-up easy.'
        })
      ]);
    });
};

// knex('recipe').insert({
//   title: '',
//   imageURL: '',
//   source: '',
//   source_url: '',
//   servings: ,
//   description: '',
//   readyInMinutes: '',
//   instructions: JSON.stringify([]),
//   notes: ''
// })
