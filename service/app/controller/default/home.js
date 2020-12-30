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
             view_count AS viewCount FROM article
             ORDER BY id DESC`;
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
    const result = await this.app.mysql.query(sql);
    this.ctx.body = result;
  }
  async getTypeInfo() {
    //获取类别名称和编号
    const result = await this.app.mysql.select("type");
    this.ctx.body = result;
  }
  async getTypeList() {
    let id = this.ctx.params.id;
    let sql = `SELECT id AS id,
             type_id AS typeId,
             title AS title, 
             introduce AS introduce,
             FROM_UNIXTIME(add_time,"%Y-%m-%d %H:%i:%s") AS addTime, 
             type_name AS typeName,
             article_content AS articleContent, 
             view_count AS viewCount FROM article
             WHERE type_id='${id}'
             ORDER BY id DESC`;
    const result = await this.app.mysql.query(sql);
    this.ctx.body = result;
  }

}

module.exports = HomeController;
