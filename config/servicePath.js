let ipUrl = "http://127.0.0.1:7001"; //接口
// let ipUrl = "https://api.goldaner.com"; //接口
let servicePath = {
  getArticleList: ipUrl + "/getArticleList", //首页接口
  getArticleById: ipUrl + "/getArticleById/", //详细页接口
  getTypeInfo: ipUrl + "/getTypeInfo", //类型接口
  getTypeList: ipUrl + "/getTypeList/", //列表接口
};
export default servicePath;
