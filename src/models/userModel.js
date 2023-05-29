const mongoose = require('mongoose')
const Schema = mongoose.Schema

const foreignLanguage = new Schema({
  foreignLanguage:{
    type: String
  }
})

const userSchema = new Schema({
  userName: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  nativeLanguage: {
    type: String,
    require: true
  },
  foreignLanguages:[foreignLanguage],
  words: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Word',
      require: true
    }
  ]
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);

