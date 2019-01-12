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


module.exports = {
    addUser: addUser,
}