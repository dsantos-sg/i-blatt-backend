const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {signUpSchema} = require("../dataValidation/userSchema");
require('dotenv').config()

const login = async (req, res) => {
	try {
		const {user: {email, _id, nativeLanguage}} = req
		const token = await jwt.sign({
			email: email, userId: _id.toString(), nativeLanguage: nativeLanguage
		}, process.env.JWT_SECRET_KEY, {expiresIn: process.env.JWT_EXPIRES_IN})
		res.status(200).json({message: "Successful Login.", data: {token: token, userId: _id.toString()}});
	} catch (error) {
		console.log({error})
		return res.status(500).json({
			message: 'Something went wrong during login.'
		})
	}
}


const signUp = async (req, res) => {
	try {
		const {body} = req
		const {error, value} = signUpSchema.validate(body, {abortEarly: false})

		if (error) {
			return res.status(401).json({errors: error.details})
		}
		const {email, password} = value
		const existingUser = await User.findOne({email})

		if (existingUser) {
			return res.status(400).json({message: "Email is already registered."})
		}
		const hashedPassword = await bcrypt.hash(password, 12)
		await User.create({...value, password: hashedPassword})
		return res.status(201).json({message: "User was successfully created."});
	} catch (error) {
		console.log({error})
		return res.status(500).json({message: "Something went wrong during registration."});
	}
}

const getUser = async (req, res) => {
	try {
		const foundUser = await User.findById(req.params.userId)
		if (!foundUser) {
			return res.status(404).json({message: 'User not found.'})
		}
		res.status(201).json(foundUser)
	} catch (error) {
		res.status(500).json({message: 'Something went wrong while getting user.'});
	}
}

const updateUser = async (req, res) => {
	try {
		const {userId} = req.params;
		const {password, ...body} = req.body;
		const hashedPassword = password ? await bcrypt.hash(password, 12) : undefined;
		const updateData = hashedPassword ? {...body, password: hashedPassword} : body;
		const foundUser = await User.findByIdAndUpdate(userId, updateData, {new: true});
		if (!foundUser) {
			return res.status(404).json({message: 'User not found.'});
		}
		res.status(200).json(foundUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({message: 'Something went wrong while getting user.'});
	}
}

const deleteUser = async (req, res) => {
	try {
		const {params: {userId}} = req
		const foundUser = await User.findByIdAndDelete(userId)
		if (!foundUser) {
			return res.status(404).json({message: 'User not found.'})
		}
		res.status(200).json({message: `The user ${foundUser.userName} was deleted`})
	} catch (error) {
		res.status(500).json({message: 'Something went wrong while getting user.'});
	}
}

module.exports = {signUp, getUser, login, updateUser, deleteUser}
