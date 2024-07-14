var express = require("express");
var router = express.Router();
const indexController = require("../controllers/indexController");

router.get('/', indexController.renderPage);
router.post('/getJellyfish', indexController.getJellyfish);
router.post('/getJellyfishInfo', indexController.getJellyfishInfo);

module.exports = router;