
 const authController = require("../controllers/authController")
 const express = require('express');
 const route = express.Router()

 route.post('/register',authController.userRegister);//register
 route.post('/login',authController.loginUser); // login 

 module.exports = route;