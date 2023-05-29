const inputValidator = (schema) => {
  return async (req, res, next) => {
    try {
      const {body} = req
      const {error} = await schema.validate(body, {abortEarly: false})
      if (error) {
        return res.status(400).json({errors: error.details})
      }
      await next()
    } catch (error) {
      return res.status(500).json({message: "Something went wrong during registration.", error: error});
    }
  }
}

module.exports = {inputValidator}