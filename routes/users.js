var express = require('express');
var router = express.Router();

const robotController =require('../server/robotController');

robotController(router);

module.exports = router;
