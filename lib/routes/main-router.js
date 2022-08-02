const koaJoiRouter = require("koa-joi-router");
const Joi = koaJoiRouter.Joi;
const router = koaJoiRouter();

const getController = require("../controllers/main-controllers")
const employeesSchemas = require("./schemas/employees-schemas")

// router.get("/employees/:id", getController.getById);
router.get("/employees", getController.getAll);
// router.get("/search", getController.searchByName);
// router.get("/report", getController.getByTribe);
// router.get("/filter", getController.filterEmployees);
// router.post("/employees", getController.create);
// router.delete("/employees/:id", getController.remove);



router.route({
    method: "POST",
    path: "/employees",
    validate: {
        body: employeesSchemas.createSchema,
        type: "json",
    },
    handler: getController.create
});


module.exports = router;