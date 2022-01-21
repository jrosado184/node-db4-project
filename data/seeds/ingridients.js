exports.seed = function (knex) {
  return knex("ingridients").insert([
    { ingridients_name: "water" },
    { ingridients_name: "oil" },
    { ingridients_name: "Pepperoni" },
    { ingridients_name: "Adobo" },
  ]);
};
