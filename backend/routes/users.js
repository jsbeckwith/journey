const express = require("express");
const router = express.Router();

// login/validation
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const validateRegisterInput = require("../validation/register.js");
const validateLoginInput = require("../validation/login.js");

// Load User model
const userModel = require("../models/users.model.js");

// @route POST users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);
	// Check validation
	if (!isValid) {
		console.log("invalid input");
		return res.status(400).json(errors);
	}

	User.findOne({ username: req.body.username })
		.then(user => {
			if (user) {
				return res.status(400).json({ username: "username already in use" });
			} else {
				const newUser = new User({
					displayname: req.body.displayname,
					username: req.body.username,
					password: req.body.password
				});
				// Hash password before saving in database
				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		});
});

// @route POST users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	// Check validation
	if (!isValid) {
		console.log("invalid input");
		return res.status(400).json(errors);
	}

	const username = req.body.username;
	const password = req.body.password;

	// Find user by username
	User.findOne({ username }).then(user => {
		// Check if user exists
		if (!user) {
			return res.status(404).json({ usernamenotfound: "username not found" });
		}
		// Check password
		bcrypt.compare(password, user.password).then(isMatch => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					username: user.username,
					displayname: user.displayname
					// 	TODO posts and friends
				};
				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 31556926 // 1 year in seconds
					},
					(err, token) => {
						res.json({
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: "Password incorrect" });
			}
		});
	});
});

// get specific user
router.get('/:id', async (req, res)  => {
    const user = await userModel.findById(req.params.id);

    try {
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;