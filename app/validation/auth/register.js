const Joi = require('joi');

module.exports = (req, res, next) => {
  const schema = Joi.object().keys({
    contact_name: Joi.string().min(2).required(),
    username: Joi.string().min(2).required(),
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.string().required(),
  });

  Joi.validate({
    contact_name: req.body.contact_name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  },
  schema, (validateErr) => {
    if (validateErr) {
      return next({
        status: 400,
        message: 'Form is invalid.',
        error: validateErr.details,
      });
    }

    return next();
  });
};
