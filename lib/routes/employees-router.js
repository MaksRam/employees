const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;
const router = new KoaJoiRouter();

const employeesController = require("../controllers/employees-controller");
const employeesSchemas = require("./schemas/employees-schemas");
const tribesController = require('../controllers/tribes-controller');
const tribesSchemas = require("./schemas/tribes-schemas");

router.route({
  method: "GET",
  path: "/employees",
  validate: {
    query: employeesSchemas.getAllSchema,
  },
  handler: employeesController.getAll,
});

router.route({
  method: "GET",
  path: "/tribes",
  validate: {
    query: tribesSchemas.getAllTribesSchema,
  },
  handler: tribesController.getAllTribes,
});

router.route({
  method: "GET",
  path: "/tribes/:id",
  validate: {
    params: tribesSchemas.getTribeByIdSchema,
  },
  handler: tribesController.getTribeById,
});

router.route({
  method: "GET",
  path: "/tribes/:id/employees",
  validate: {
    params: tribesSchemas.idEmployeesSchema,
  },
  handler: tribesController.idEmployees,
});


router.route({
  method: "POST",
  path: "/employees",
  validate: {
    body: employeesSchemas.createSchema,
    type: "json",
  },
  handler: employeesController.create,
});

router.route({
  method: "GET",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.getByIdSchema,
  },
  handler: employeesController.getById,
});

router.route({
  method: "DELETE",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.deleteByIdSchema,
  },
  handler: employeesController.deleteById,
});

router.get("/reports/employees", employeesController.employeesReport);

module.exports = router;
