"use strict";

const Controller = require("egg").Controller;
const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const awaitWriteStream = require('await-stream-ready').write;

class HomeController extends Controller {
  async upload() {
    const { ctx } = this;
    const stream = await ctx.getFileStream();
    const name = Date.now() + '' + path.extname(stream.filename).toLocaleLowerCase(); // 获取文件的尾缀名（扩展名）
    console.log('name:>>>>>>>', name);
    console.log('filename:>>>>>>>', stream.filename);

    const target = path.resolve(__dirname, '../uploads'); // 保存的文件夹路径

    // 判断存储的文件夹是否存在，不存在则创建
    if (!fs.existsSync(target)) {
      fs.mkdirSync(target);
    }

    const targetFilename = path.join(target, name); // 写入的文件名称, 目标文件名
    console.log('filename:>>>>>>>', targetFilename);

    const writeStream = fs.createWriteStream(targetFilename);

    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (e) {
      await sendToWormhole(stream);
      console.log(e);
      throw e;
    }
    ctx.body = {
      code: 200,
      message: '上传成功',
      data: stream.filename,
    };
  }
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
    // 文章详情页
    let id = this.ctx.params.id;
    let sql1=`UPDATE article SET view_count=view_count+1 WHERE id='${id}'`;
    let sql2 = `SELECT id AS id, 
             title AS title,
             introduce AS introduce,
             FROM_UNIXTIME(add_time,"%Y-%m-%d %H:%i:%s") AS addTime, 
             type_name AS typeName,
             article_content AS articleContent, 
             view_count AS viewCount FROM article
             WHERE id='${id}'`;
    await this.app.mysql.query(sql1);
    const result =await this.app.mysql.query(sql2);
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
