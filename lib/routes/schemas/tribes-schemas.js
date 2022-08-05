const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;

const getAllTribesSchema = Joi.object({
    name: Joi.string(),
    area: Joi.string(),
  });

  const getTribeByIdSchema = Joi.object({
    id: Joi.number().required(),
  });

  const idEmployeesSchema = Joi.object({
    id: Joi.number(),
    name: Joi.string(),
    tribe: Joi.string(),
  })

  module.exports = {
    getAllTribesSchema,
    getTribeByIdSchema,
    idEmployeesSchema
  }