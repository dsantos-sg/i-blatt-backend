const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const passport = require("passport");
const userRoutes = require('./routes/usersRoutes')
const wordRoutes = require("./routes/wordsRoutes");
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

const PORT = process.env.DEVELOPMENT_PORT || process.env.PRODUCTION_PORT
const URI = process.env.MONGODB_URI
const options = {useNewUrlParser: true, useUnifiedTopology: true}

app.use('*', cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize())
app.use(process.env.API_ROOT, userRoutes)
app.use(process.env.API_ROOT, wordRoutes)

mongoose.Promise = global.Promise
mongoose
  .connect(URI, options)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running at http://localhost:${PORT}`
    ))
  })
  .catch(error => {
    throw error
  })
