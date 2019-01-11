// 分类接口
var express = require('express');
var router = express.Router();
var classApi = require('./classify/index');

router.post('/api/addClass', classApi.addClass);


module.exports = router;