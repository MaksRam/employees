const Koa = require('koa')
const app = new Koa();

const bodyParser = require("koa-bodyparser");
app.use(bodyParser());

const mainRouter = require('./lib/routes/main-router');
app.use(mainRouter.middleware());

app.listen(3000, () => {
    console.log(`Service is running on http://localhost:3000`);
  });