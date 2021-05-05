// const Joi = require('joi');

// exports.Validations = (data) => {
//   const schema = Joi.object({
//     nom: Joi.string().required().min(3).max(48).trim().required(),
//     prenom: Joi.string().required().min(3).max(48).trim().required(),
//     email: Joi.string().email().pattern(new RegExp('gmail.com$')).required(),
//     password: Joi.string().required()
//         .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
//   }).unknown;

//   return schema.validate(data);
// };

