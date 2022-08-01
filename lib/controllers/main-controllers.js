const getEmployees = require("../data/employees");

function getById(ctx) {
    const index = ctx.request.params.id;
    ctx.body = getEmployees.employees[index];
    if(!getEmployees.employees[index]) {
        ctx.status = 404;
        ctx.body = { text: "Error 404" };
    }
}

function getAll(ctx) {
    ctx.body = getEmployees.employees;
}

function create(ctx) {
    const text = ctx.request.body;
    getEmployees.employees.push(text);
    ctx.status = 201;
    ctx.body = { success: "True" };
  }

  function remove(ctx) {
    const id = ctx.params.id;
    getEmployees.employees.splice(id);
    ctx.status = 200;
    ctx.body = { success: "True" };
  }

  function searchByName(ctx) {
    const query = ctx.request.query;
    for (el of getEmployees.employees) {
      if (query.name === el.name) {
        ctx.body = el;
        ctx.status = 200;
        break;
      } else {
        ctx.status = 400;
      } 
    }
  }

  function getByTribe(ctx) {
    const query = ctx.request.query;
    const result = [];
    for (el of getEmployees.employees) {
      if (el.tribe.includes(query.tribe)) {
        result.push(el)
      }
    }
    ctx.body = result;

}

  

module.exports = { getById, getAll, create, remove, searchByName, getByTribe }