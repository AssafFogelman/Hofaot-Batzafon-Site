const Joi = require("joi");

function validateRegistration(user) {
  const schema = Joi.object({
    name: Joi.string().min(2).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required(),
    biz: Joi.boolean(),
    phone: Joi.string().min(2),
    bizUrl: Joi.string().min(2),
    wazeLocation: Joi.string().min(15),
  });

  return schema.validate(user);
}

module.exports = validateRegistration;
