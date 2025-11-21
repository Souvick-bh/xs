const express = require('express');
const {handlegeneration, handleanalytics, handleredirection, handleAllShow} = require('../controllers/url');
const { model } = require('mongoose');

const router = express.Router();

router.post('/', handlegeneration);

router.get('/',handleAllShow);

router.get('/analytics/:shortenedId',handleanalytics)

router.get('/:shortenedId',handleredirection)

module.exports = router;