const Router = require("@koa/router");
const router = new Router();

const getController = require("../controllers/main-controllers")

router.get("/employees/:id", getController.getById);
router.get("/employees", getController.getAll);
router.get("/search", getController.searchByName);
router.get("/report", getController.getByTribe);
router.get("/filter", getController.filterEmployees);
router.post("/employees", getController.create);
router.delete("/employees/:id", getController.remove);


module.exports = router;