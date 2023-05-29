const express = require('express');
const {createWord, getWordList, getWord, updateWord, deleteWord} = require("../controllers/wordController");
const {uploadImage, upload, downloadImage, deleteImage} = require("../controllers/imageController");
const passport = require("../middleware/passport");
const {imageValidation} = require("../middleware/imagesValidation");

const router = express.Router();

router.get('/words', passport.authenticate('jwt', {session: false}), getWordList)
router.post('/create-word', passport.authenticate('jwt', {session: false}), createWord)
router.route('/word/:wordId')
  .get(passport.authenticate('jwt', {session: false}), getWord)
  .put(passport.authenticate('jwt', {session: false}), updateWord)
  .delete(passport.authenticate('jwt', {session: false}), deleteWord)
router.route('/image')
  .post(passport.authenticate('jwt', {session: false}), imageValidation, upload.single('image'), uploadImage)
  .get(passport.authenticate('jwt', {session: false}), downloadImage)

router.delete('/image/:key', passport.authenticate('jwt', { session: false }), deleteImage);

module.exports = router;
