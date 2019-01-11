// bills-api 账单相关接口

var mymongo = require('mymongo1610');

// 查询账单接口 -- 待补充
function getBill(req, res, next) {
    // 应该传入时间 通过时间返回相对应的账单 
    mymongo.find('bill_list', (err) => {
        if (err) {
            res.json({ code: 0, msg: err });
        } else {
            res.json({ code: 1, ms: '删除成功!' });
        }
    });
};

// 新增账单接口
function addBill(req, res, next) {
    // res.json({ 'cont': '/api/addBill接口返回值' });
    var uid = req.body.uid; //区分用户
    var type = req.body.type; //收入-> 0，支出-> 1 
    var money = req.body.money;//金额
    var intro = req.body.intro; //账单说明
    var icon = req.body.icon; //图标类名
    // 账单创建时间 
    // tolocaleString(把时间变成年月日时分).split(切割空格取年月日)
    var timer = new Date().toLocaleString().split(' ')[1];
    // 后端非空判断
    if (!uid || !icon || !type || !money || !timer || !intro) {
        return res.json({ code: 3, msg: '丢失参数' })
    }
    mymongo.insert('bill_list', { uid: uid, timer: timer, type: type, money: money, intro: intro, icon: icon }, (err) => {
        if (err) {
            res.json({ code: 0, msg: err });
        } else {
            res.json({ code: 1, msg: '新增成功' });
        }
    });
};

// 删除账单接口
function delBill(req, res, next) {
    var id = req.query._id; //get方式传参接受唯一标识id
    mymongo.delete('bill_list', { _id: id }, (err) => {
        if (err) {
            res.json({ code: 0, msg: err });
        } else {
            res.json({ code: 1, ms: '删除成功!' });
        }
    });
};

module.exports = {
    getBill: getBill,
    addBill: addBill,
    delBill: delBill
}