const express = require('express');
const router = express.Router();

const newsController = require('../resources/app/controllers/NewsController');

//Detail
router.get('/:slug', newsController.show);

//News home
router.get('/', newsController.index);

module.exports = router;
