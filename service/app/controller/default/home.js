'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, eggfssssfadfdsaf2341432';
  }
}

module.exports = HomeController;

// RESTful 移动 app  前后端分离  具有，简单，约束性特性
// 请求方式 get 获取资源  post 新建资源 put 修改资源  delete 删除资源