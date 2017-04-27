const express = require('express');
const users = require('./users'); // this is where you'd put the actual functions

const router = express.Router();

// sign up
router.post('/users', users.createUser);

// get all users
router.get('/users', users.getAllUsers);

// get specific user
router.get('/user/:id', users.getUser);

// update user
router.patch('/users/:id', users.updateUser);

// check whether user exists
router.post('/users/check', users.checkIfExists);

// log a student in
router.post('/users/authenticate', users.authenticateUser);

router.get('/class/:id/:className', classAPI.getClass);

module.exports = router;
