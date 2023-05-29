const express = require('express');
const router = express.Router();
const passport = require("passport");
const {inputValidator} = require("../middleware/inputValidator");
const {loginSchema, signUpSchema, updateUserSchema} = require('../dataValidation/userSchema')
const {signUp, getUser, login, updateUser, deleteUser} = require("../controllers/userController")

router.post('/signup',
	inputValidator(signUpSchema),
	signUp);
router.post('/login',
	inputValidator(loginSchema),
	passport.authenticate('local', {session: false}), login);
router.route('/user/:userId')
	.get(passport.authenticate('jwt', {session: false}), getUser)
	.patch(inputValidator(updateUserSchema),
		passport.authenticate('jwt', {session: false}), updateUser)
	.delete(passport.authenticate('jwt', {session: false}), deleteUser);

module.exports = router
