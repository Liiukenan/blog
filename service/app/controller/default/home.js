"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    // 连接mysql数据库
    let result = await this.app.mysql.get("blog_content", {});
    this.ctx.body = result;
  }
  async getArticleList() {
    //获取文章列表
    let sql = `SELECT id AS id, 
             title AS title, 
             introduce AS introduce,
             FROM_UNIXTIME(add_time,'%Y-%m-%d %H:%i:%s') AS addTime, 
             type_name AS typeName,
             article_content AS articleContent, 
             view_count AS viewCount FROM article`;
    const results = await this.app.mysql.query(sql);
    this.ctx.body = results;
  }
  async getArticleById() {
    let id = this.ctx.params.id;
    let sql = `SELECT id AS id, 
             title AS title, 
             introduce AS introduce,
             FROM_UNIXTIME(add_time,"%Y-%m-%d %H:%i:%s") AS addTime, 
             type_name AS typeName,
             article_content AS articleContent, 
             view_count AS viewCount FROM article
             WHERE id='${id}'`;
    const result=await this.app.mysql.query(sql);
    this.ctx.body=result;
  }
}

module.exports = HomeController;

// RESTful 移动 app  前后端分离  具有，简单，约束性特性
// 请求方式 get 获取资源  post 新建资源 put 修改资源  delete 删除资源

