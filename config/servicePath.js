let ipUrl = "http://188.131.143.196:7001"; //接口
let servicePath = {
  getArticleList: ipUrl + "/getArticleList", //首页接口
  getArticleById: ipUrl + "/getArticleById/", //详细页接口
  getTypeInfo: ipUrl + "/getTypeInfo", //类型接口
  getTypeList: ipUrl + "/getTypeList/", //列表接口
};
export default servicePath;
