const { knex } = require("../knex");

async function migrate() {
  await knex.schema.createTable("tribes", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("area").notNullable();
  });

  await knex.schema.createTable("employees", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("title").notNullable();
    table
      .integer("tribe_id")
      .unsigned()
      .index()
      .references("id")
      .inTable("tribes");
  });

  console.log("✅ database migrated ");
  await knex.destroy();
}

migrate();