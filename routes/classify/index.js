var mongodb = require('mongodb');
var mymongo = require('mymongo1610');

function addClass(req, res, next) {
    res.json({ code: 1, msg: '添加分类接口测试' });
};

module.exports = {
    addClass: addClass,
}