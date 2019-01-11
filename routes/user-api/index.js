var mymongo = require('mymongo1610');

function addUser(req, res, next) {
    // 用户名非空判断
    var nick_name = req.body.nick_name || "";
    if (nick_name) {
        mymongo.insert('user_list', { nick_name: nick_name }, (err, result) => {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                res.json({ code: 1, msg: result.insertedId });
            }
        })
    }
};
// 5c3594243fe6f828203607cd
// 5c35943e4be8f110e44121c8


module.exports = {
    addUser: addUser,
}














// user 下的index.js 写的是users.js下所有接口的回调函数
// 所以模块抛出一个对象 返回所有接口的ck回调

// var addUser = function (req, res, next) {

// }
// var delUser = function (req, res, next) {

// }

// 抛出对象

// module.exports = {
//     addUser: addUser,
//     delUser: delUser
// }