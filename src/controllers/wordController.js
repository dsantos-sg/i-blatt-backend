const Word = require("../models/wordModel");

//TODO: Adicionar validação de dados
const createWord = async (req, res) => {
  try {
    const word = new Word({
      ...req.body,
      creator: req.user._id
    })
    await word.save()
    res.status(201).json({message: "New word created successfully.", data: word});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error while creating new word."});
  }
}

const getWordList = async (req, res) => {
  try {
    const userId = req.user._id
    console.log(req.user._id)
    const allWords = await Word.find({creator: userId})
    res.status(200).json({data: allWords});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error while getting all words."});
  }
}

const getWord = async (req, res) => {
  try {
    const foundWord = await Word.findById(req.params.wordId)
    if (!foundWord) {
      return res.status(404).json({message: 'Word not found.'})
    }
    res.status(200).json({data: foundWord});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error while searching for a word by id."});
  }
}

const updateWord = async (req, res) => {
  try {
    const {wordId} = req.params;
    const foundWord = await Word.findByIdAndUpdate(wordId, req.body, {new: true})
    if (!foundWord) {
      return res.status(404).json({message: 'Word not found.'})
    }
    res.status(200).json({data: foundWord});
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error while searching for a word by id."});
  }
}

const deleteWord = async (req, res) => {
  try {
    const foundWord = await Word.findByIdAndDelete(req.params.wordId)
    if (!foundWord) {
      return res.status(404).json({message: 'Word not found.'})
    }
    res.status(200).json(`The word ${foundWord.nativeWord} was deleted`);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: "Internal server error while searching for a word by id."});
  }
}


module.exports = {createWord, getWordList, getWord, updateWord, deleteWord}
