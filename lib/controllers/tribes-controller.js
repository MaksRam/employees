const tribesModel = require("../models/tribes-model");

async function getAllTribes(ctx) {
    const name = ctx.query.name;
    const area = ctx.query.area;
  
    ctx.status = 200;
    ctx.body = await tribesModel.getAllTribes(name, area);

  }

  async function getTribeById(ctx) {
    const id = ctx.params.id;
    const tribe = await tribesModel.getTribeById(id);
  
    ctx.status = 200;
    ctx.body = tribe;
  }

  async function idEmployees(ctx) {
    // const name = ctx.query.name;
    // const tribe = ctx.query.tribe;
  
    // ctx.status = 200;
    // ctx.body = await tribesModel.idEmployees(name,tribe);
    const id = ctx.params.id;
    const tribe = await tribesModel.idEmployees(id);
  
    ctx.status = 200;
    ctx.body = tribe;
  }

  module.exports = {
    getAllTribes,
    getTribeById,
    idEmployees,
  }