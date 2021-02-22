// 引入mysql的配置文件
// const db = require('../config/db');

// 引入sequelize对象
// const Sequelize = db.sequelize;

// 引入数据表模型
// const user = Sequelize.import('../schema/user');
// user.sync({force: false}); //自动创建表

class userModel {
    /**
     * 创建学生表模型
     * @param data
     * @returns {Promise<*>}
    //  */
    // static async createUser(data){
    //     return await user.create({
    //         name: data.name, //姓名
    //         age: data.age,  //年龄
    //         gender: data.gender,  //性别
    //         grade: data.grade //分数
    //     });
    // }
    //
    // /**
    //  * 查询学生信息的详情
    //  * @param id 学生信息ID
    //  * @returns {Promise<Model>}
    //  */
    // static async getUserDetail(id){
    //     return await user.findOne({
    //         where:{
    //             id
    //         }
    //     });
    // }
}

module.exports = userModel;
