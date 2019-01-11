/*
 * @Author: Liucx
 * @Date: 2019-01-07 14:14:13
 * @Last Modified by: Liucx
 * @Last Modified time: 2019-01-07 14:20:44
 */
// ctrl + alt + I

// 链接数据库 查询
/**
 * [mymongo description] 自定义快速查找mongodb数据库
 *
 * @mymongo.find  {查找数据库所有数据}
 * 'user'  {第一个参数写集合名称,数据库名称默认tast,
 * 需要更改去mymongo1610中的readme更改}
 */
var mymongo = require('mymongo1610');
mymongo.find('user', function (err, result) {
    if (err) {
        throw err;
    }
    console.log(result);
});
