const { knex } = require("../db/knex");

const TABLE_NAME = "tribes";

async function getAllTribes(name, area) {
    const query = knex(TABLE_NAME).select()
  
    if(name) query.whereILike('name', `%${name}%`);
    if (area) query.where({area});
    
  
    return await query;
  }


async function getTribeById(id) {
    return await knex(TABLE_NAME).select().where({ id });
  }

  async function idEmployees(id) {
    return await knex(TABLE_NAME).select('tribes.name as tribe', 'employees.name as name')
    .innerJoin('employees', 'employees.tribe_id', '=', 'tribes.id' )
    .where({tribe_id: id })

  }

  module.exports = {
    getAllTribes,
    getTribeById,
    idEmployees,
  }