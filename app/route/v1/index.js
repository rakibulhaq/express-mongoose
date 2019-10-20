const express = require('express');
router = express.Router();

const ROUTE_V1_PATH = APP_ROUTE_PATH + "v1/";


router.use('/images', require(ROUTE_V1_PATH + 'image'));
router.use('/activities', require(ROUTE_V1_PATH + 'activity'));

module.exports = router;
