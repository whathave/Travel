const router = require('koa-router')()
// 学生
const UserController = require('../controllers/user');

router.prefix('/user');;;
/**
 * 学生接口
 */
//创建学生
router.post('/user/create',UserController.create);
//获取学生详情
router.get('/user/:id',UserController.detail)

module.exports = router
