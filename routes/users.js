var express = require('express');
var router = express.Router();
var userApi = require('./user-api/index');

// 新增用户接口
router.post('/api/addUser', userApi.addUser);

// 

module.exports = router;


