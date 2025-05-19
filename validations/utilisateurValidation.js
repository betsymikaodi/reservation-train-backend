const Joi = require('joi');

const utilisateurSchema = Joi.object({
  nom: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  mot_de_passe: Joi.string().min(6).required()
});

module.exports = { utilisateurSchema };
