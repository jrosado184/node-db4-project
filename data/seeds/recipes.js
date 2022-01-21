exports.seed = function (knex) {
  return knex("recipes").insert([
    { recipe_name: "Spaghetti" },
    { recipe_name: "Rice" },
    { recipe_name: "Pizza" },
    { recipe_name: "Chicken" },
  ]);
};
