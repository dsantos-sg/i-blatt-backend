const Joi = require("joi");

/*const nounTypeSchema = new Joi.object({
  language: Joi.string().max(255),
  foreignWord: String,
  mainArticle: String,
  plural: String,
  synonyms: [String],
  sentences: [String],
  tags: [String],
  additionalInfos: String
})

const foreignWordDataSchema = Joi.object({
  nounType: Joi.array().items(nounTypeSchema)

})


const wordSchema = Joi.object({
  nativeWord: Joi.string().min(1).max(255).required(),
  image: Joi.string().uri().required().allow(''),
  wordType: Joi.string().valid('ADJECTIVE', 'CONNECTION', 'NOUN', 'PRONOUN', 'VERB'),
  rating: Joi.number().min(0).max(5),
  timestampAccess: Joi.array().items(Joi.date().timestamp()),
})*/


/*const wordSchema = Joi.object({
    userName: Joi.string().min(2).max(255).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(24).required(),
    nativeLanguage: Joi.string().min(2).max(255).required()
  }
)*/

module.exports = {wordSchema}