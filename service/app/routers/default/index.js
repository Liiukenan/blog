module.exports = (app) => {
  const { router, controller } = app;
  router.get("/index", controller.default.home.index);
  router.get("/getArticleList", controller.default.home.getArticleList);
  router.get("/getArticleById/:id", controller.default.home.getArticleById);
  router.get("/getTypeInfo", controller.default.home.getTypeInfo);
  router.get("/getTypeList/:id", controller.default.home.getTypeList);
};
