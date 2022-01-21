exports.seed = function (knex) {
  return knex("steps").insert([
    { step_number: 1, instructions: "fry chicken", recipe_id: 1 },
    { step_number: 12, instructions: "boil water", recipe_id: 2 },
    { step_number: 3, instructions: "turn on oven", recipe_id: 3 },
    { step_number: 5, instructions: "none", recipe_id: 4 },
    { step_number: 6, instructions: "eat", recipe_id: 5 },
  ]);
};
