const Joi = require("joi");


const foreignLanguagesSchema = Joi.object({
	foreignLanguage: Joi.string().min(2).max(255)
})

const signUpSchema = Joi.object({
		userName: Joi.string().min(2).max(255).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(24).required(),
		nativeLanguage: Joi.string().min(2).max(255).required(),
		foreignLanguages: Joi.array().items(foreignLanguagesSchema)
	}
)

const loginSchema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(24)
	}
)

const updateUserSchema = Joi.object({
		userName: Joi.string().min(2).max(255),
		email: Joi.string().email(),
		password: Joi.string().min(6).max(24),
		nativeLanguage: Joi.string().min(2).max(255)
	}
)

module.exports = {signUpSchema, loginSchema, updateUserSchema}