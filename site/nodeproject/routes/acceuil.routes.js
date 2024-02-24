const express = require("express");
const { getHomeData, receiveData } = require("../controllers/acceuil.controller");
var router = express.Router();

// router.get('/data', getHomeData);
router.get('/', getHomeData);

router.post('/post', receiveData);


module.exports = router;

