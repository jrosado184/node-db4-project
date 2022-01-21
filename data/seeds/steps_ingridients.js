exports.seed = function (knex) {
  return knex("steps_ingridients").insert([
    { step_id: 1, ingridients_id: 1, ingridient_amount: "1 cup" },
  ]);
};
