exports.up = async function (knex) {
  await knex.schema
    .createTable("recipes", (table) => {
      table.increments("recipe_id");
      table.text("recipe_name", 128).unique().notNullable();
    })
    .createTable("steps", (table) => {
      table.increments("step_id");
      table.integer("step_number", 128);
      table.string("instructions");
    })
    .createTable("ingridients", (table) => {
      table.increments("ingridients_id");
      table.text("ingridients_name", 128);
    })
    .createTable("steps_ingridients", (table) => {
      table.increments("steps_ingridients_id");
      table
        .integer("step_id")
        .unsigned()
        .notNullable()
        .references("step_id")
        .inTable("steps")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
      table
        .integer("ingridients_id")
        .unsigned()
        .notNullable()
        .references("ingridients_id")
        .inTable("ingridients")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    });
};

exports.down = async function (knex) {
  await knex.schema
    .dropTableIfExists("steps_ingridients")
    .dropTableIfExists("ingridients")
    .dropTableIfExists("steps")
    .dropTableIfExists("recipes");
};
