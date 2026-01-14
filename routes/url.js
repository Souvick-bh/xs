const express = require('express');
const {handlegeneration, handleanalytics, handleredirection, handleAllShow} = require('../controllers/url');
const {restriction} = require('../middleware/auth');

const router = express.Router();

router.post('/',restriction, handlegeneration);

router.get('/',restriction,handleAllShow);

router.get('/analytics/:shortenedId',restriction,handleanalytics);

router.get('/:shortenedId',handleredirection);

module.exports = router;