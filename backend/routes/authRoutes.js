
 const authController = require("../controllers/authController")
 const express = require('express');
 const route = express.Router()

 route.post('/register',authController.userRegister);//register
 route.post('/login',authController.loginUser); // login 
 route.get('/logout',authController.logoutController); //logout

 module.exports = route;