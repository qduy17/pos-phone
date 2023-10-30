const express = require('express');
const router = express.Router();

const sitesController = require('../resources/app/controllers/SiteController');

//Search
router.get('/search', sitesController.search);

//About
router.get('/about', sitesController.about);

//Login
router.get('/login', sitesController.login);

//Sign up
router.get('/signup', sitesController.signup);
//Homepage


//Home
router.get('/', sitesController.index);

module.exports = router;
