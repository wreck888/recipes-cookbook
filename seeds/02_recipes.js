 const recipes = [
   {
     title: 'Mac and Cheese',
     source: 'Grandma Sarah',
     category: 'Dinner',
     ingredients: `8 ounce box elbow macaroni,
     1/4 cup butter,
     1/4 cup flour ,
     1/2 teaspoon salt,
     2 cups milk
     2 cups shredded Cheddar cheese`,
     instructions: `Step 1
     Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes.
     Step 2:
     At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn't burn.
     Step 3:
     Add Cheddar cheese and stir until melted, 2 to 4 minutes.
     Step 4:
     Drain macaroni and fold into cheese sauce until coated.`,
     user_id: 1
  },
  {
    title: 'Ham and Cheese Omelet',
    source: 'Grandma Maine',
    category: 'breakfast',
    ingredients: `1 tablespoon butter,
    3 eggs,
    3 tablespoons water,
    1/8 teaspoon salt,
    1/8 teaspoon pepper,
    1/2 cup cubed fully cooked ham,
    1/4 cup shredded Swiss cheese`,
    instructions: `In a small nonstick skillet, melt butter over medium-high heat. Whisk the eggs, water, salt and pepper. Add egg mixture to skillet (mixture should set immediately at edges).
    As eggs set, push cooked edges toward the center, letting uncooked portion flow underneath. When the eggs are set, place ham on one side and sprinkle with cheese; fold other side over filling. Slide omelet onto a plate.`,
    user_id: 1
  },
  {
    title: 'Chicken wrap',
    source: 'Grandma Ari',
    category: 'Lunch',
    ingredients: `2 cups cooked grilled chicken breasts chopped,
    1/4 cup Hidden Valley Simply Ranch dressing,
    1/2 cup mozzarella cheese,
    1/4 cup cilantro minced,
    4 tortilla wraps`,
    instructions:`Lay tortillas on a clean flat surface. Place about 1/2 cup chicken, 1 tablespoon ranch, 2 tablespoons of cheese, and 1 tablespoon of minced cilantro on each tortilla. Fold tightly to form a burrito shape.
    Heat a heavy-duty pan or grill to medium heat. Coat with a light layer or oil or cooking spray and cook wraps for 1-2 minutes on each side or until the tortilla is crispy and golden. Remove from heat, slice in half and serve immediately`,
    user_id: 2
  }
 ]

exports.seed = function(knex) {
  return knex('recipes').insert(recipes);
 };
