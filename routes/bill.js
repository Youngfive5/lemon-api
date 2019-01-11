// 账单接口处理
var express = require('express');
var router = express.Router();
var billApi = require('./bill-api/index'); //引入文件夹下专门写 ck的 index.js

// 获取账单接口(通过年月查询接口显示出账单)
router.post('/api/getBill', billApi.getBill);

// 新增账单接口
router.post('/api/addBill', billApi.addBill);

// 删除账单接口
router.get('/api/delBill', billApi.delBill);

module.exports = router;