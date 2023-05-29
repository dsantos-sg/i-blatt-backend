const mongoose = require('mongoose')

const Schema = mongoose.Schema

const verbTypeSchema = new Schema({
  language: String,
  foreignWord: String,
  verbTense: {
    presentTense: {
      firstSingularPerson: String,
      secondSingularPerson: String,
      thirdSingularPerson: String,
      firstPluralPerson: String,
      secondPluralPerson: String,
      thirdPluralPerson: String
    },
    simplePast: {
      firstSingularPerson: String,
      secondSingularPerson: String,
      thirdSingularPerson: String,
      firstPluralPerson: String,
      secondPluralPerson: String,
      thirdPluralPerson: String
    },
    pastPerfectTense: {
      firstSingularPerson: String,
      secondSingularPerson: String,
      thirdSingularPerson: String,
      firstPluralPerson: String,
      secondPluralPerson: String,
      thirdPluralPerson: String
    }
  },
  synonyms: [String],
  sentences: [String],
  tags: [String],
  additionalInfos: String
})

const nounTypeSchema = new Schema({
  language: String,
  foreignWord: String,
  mainArticle: String,
  plural: String,
  synonyms: [String],
  sentences: [String],
  tags: [String],
  additionalInfos: String
})

const adjectiveTypeSchema = new Schema({
  language: String,
  foreignWord: String,
  inferiority: String,
  comparative: String,
  superlative: String,
  synonyms: [String],
  sentences: [String],
  tags: [String],
  additionalInfos: String
})

const pronounTypeSchema = new Schema({
  language: String,
  foreignWord: String,
  generalDefinitions: String,
  synonyms: [String],
  sentences: [String],
  tags: [String],
  additionalInfos: String
})

const connectionTypeSchema = new Schema({
  language: String,
  foreignWord: String,
  generalDefinitions: String,
  synonyms: [String],
  sentences: [String],
  tags: [String],
  additionalInfos: String
})

const foreignWordDataSchema = new Schema({
  nounType: [nounTypeSchema],
  verbType: [verbTypeSchema],
  adjectiveType: [adjectiveTypeSchema],
  pronounType: [pronounTypeSchema],
  connectionType: [connectionTypeSchema]
})

const WordModel = new Schema({
  nativeWord: {
    type: String,
    required: true
  },
  image: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wordType: {
    type: String,
    enum: ['ADJECTIVE', 'CONNECTION', 'NOUN', 'PRONOUN', 'VERB']
  },
  rating: Number,
  timestampAccess: [Date],
  foreignWordData: foreignWordDataSchema
}, {timestamps: true})

module.exports = mongoose.model('Word', WordModel)

/*const mongoose = require('mongoose')

const Schema = mongoose.Schema

const foreignLanguagesSchema = new Schema({
  foreignLanguage: String
})

const tagsSchema = new Schema({
  tag: String
})

const synonymsSchema = new Schema({
  synonyms: String
})

const sentencesSchema = new Schema({
  sentence: String
})

const presentTenseSchema = new Schema({
  firstSingularPerson: String,
  secondSingularPerson: String,
  thirdSingularPerson: String,
  firstPluralPerson: String,
  secondPluralPerson: String,
  thirdPluralPerson: String
})

const simplePastTenseSchema = new Schema({
  firstSingularPerson: String,
  secondSingularPerson: String,
  thirdSingularPerson: String,
  firstPluralPerson: String,
  secondPluralPerson: String,
  thirdPluralPerson: String
})

const pastPerfectTenseSchema = new Schema({
  firstSingularPerson: String,
  secondSingularPerson: String,
  thirdSingularPerson: String,
  firstPluralPerson: String,
  secondPluralPerson: String,
  thirdPluralPerson: String
})

const verbTenseSchema = new Schema({
  presentTense: presentTenseSchema,
  simplePast: simplePastTenseSchema,
  pastPerfectTense: pastPerfectTenseSchema
})

const verbTypeSchema = new Schema({
  language: foreignLanguagesSchema,
  foreignWord: String,
  verbTense: verbTenseSchema,
  synonyms: [synonymsSchema],
  sentences: [sentencesSchema],
  tags: [tagsSchema],
  additionalInfos: String
})

const nounTypeSchema = new Schema({
  language: foreignLanguagesSchema,
  foreignWord: String,
  mainArticle: String,
  plural: String,
  synonyms: [synonymsSchema],
  sentences: [sentencesSchema],
  tags: [tagsSchema],
  additionalInfos: String
})

const adjectiveTypeSchema = new Schema({
  language: foreignLanguagesSchema,
  foreignWord: String,
  inferiority: String,
  comparative: String,
  superlative: String,
  synonyms: [synonymsSchema],
  sentences: [sentencesSchema],
  tags: [tagsSchema],
  additionalInfos: String
})

const pronounTypeSchema = new Schema({
  language: foreignLanguagesSchema,
  foreignWord: String,
  generalDefinitions: String,
  synonyms: [synonymsSchema],
  sentences: [sentencesSchema],
  tags: [tagsSchema],
  additionalInfos: String
})

const connectionTypeSchema = new Schema({
  language: foreignLanguagesSchema,
  foreignWord: String,
  generalDefinitions: String,
  synonyms: [synonymsSchema],
  sentences: [sentencesSchema],
  tags: [tagsSchema],
  additionalInfos: String
})

const foreignWordDataSchema = new Schema({
  nounType: [nounTypeSchema],
  verbType: [verbTypeSchema],
  adjectiveType: [adjectiveTypeSchema],
  pronounType: [pronounTypeSchema],
  connectionType: [connectionTypeSchema]
})

const WordModel = new Schema({
  nativeWord: {
    type: String,
    required: true
  },
  image: String,
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wordType: {
    type: String,
    enum: ['ADJECTIVE', 'CONNECTION', 'NOUN', 'PRONOUN', 'VERB']
  },
  rating: Number,
  timestampAccess: [Date],
  foreignWordData: foreignWordDataSchema
})

module.exports = mongoose.model('Word', WordModel)*/


/*

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TagSchema = new Schema({
  tag: {
    type: String
  }
})

const NounTypeSchema = new Schema({
  foreignWord: {
    type: String
  },
})

const WordModel = new Schema({
    nativeWord: {
      type: String,
    },
    rating: {
      type: Number
    },
    creator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    nounType: {
      type: NounTypeSchema
    },
    tags: [TagSchema]

  }, {timestamps: true}
);


module.exports = mongoose.model('Word', WordModel)
*/