const getEmployees = require("../data/employees");
const Joi = require("joi");

const createSchema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  tribe: Joi.string().required(),
});

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

    // const { name, title, tribe } = ctx.request.body;
  
    // if (!name || !title || !tribe) {
    //   ctx.status = 400;
    //   return;
    // }

    const employee = ctx.request.body;
    const { error } = createSchema.validate(employee);
    if(error) {
      ctx.status = 400;
      ctx.body = {
        error: error.details[0].message,
      }
      return;
    }
  
    getEmployees.employees.push({ employee });
    ctx.status = 201;
  }
  // if (
  //   !ctx.request.body.name||
  //   !ctx.request.body.title||
  //   !ctx.request.body.tribe
  // ) {
  //   ctx.status = 400;
  //   return;
  // }
  // const newEmployee = ctx.request.body;
  // getEmployees.employees.push(newEmployee);

  
    // const text = ctx.request.body;
    // getEmployees.employees.push(text);
    // ctx.status = 201;
    // ctx.body = { success: "True" };

  function remove(ctx) {
    const id = ctx.params.id;
    getEmployees.employees.splice(id);
    ctx.status = 200;
    ctx.body = { success: "True" };
  }

  const searchByNameSchema = Joi.object({
    name: Joi.string().required(),
  });

  function searchByName(ctx) {
    // const query = ctx.request.query;
    // for (el of getEmployees.employees) {
    //   if (query.name === el.name) {
    //     ctx.body = el;
    //     ctx.status = 200;
    //     break;
    //   } else {
    //     ctx.status = 400;
    //   } 
    // }
    const name = ctx.query.name;
    const employees = getEmployees.employees.filter(x=>x.name.toLowerCase().includes(name.toLowerCase()))
    ctx.body = employees;
  }

  function filterEmployees(ctx) {
    const title = ctx.query.title;
    const tribe = ctx.query.tribe;

    // const employees = getEmployees.employees.filter((x)=> {
    //   if (title&&tribe) {
    //     return x.title === title && x.tribe === tribe;
    //   } else if (title && !tribe) {
    //     return x.title === title
    //   } else if (!title && tribe) {
    //     return x.tribe === tribe;
    //   }
    // });

    const employees = getEmployees.employees.filter((x)=> (title? x.title === title : true) && (tribe ? x.tribe === tribe : true))

    ctx.body = employees;
  };



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

  

module.exports = { getById, getAll, create, remove, searchByName, getByTribe, filterEmployees }